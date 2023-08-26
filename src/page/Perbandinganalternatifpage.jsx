import React, { useState } from "react";
import Layout from "../layout/Layout";
import Title from "../components/Title";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Radio,
  RadioGroup,
  TableContainer,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { MdDataSaverOff } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { useGetalternatif } from "../lib/alternatif/useGetalternatif";
import { useGetkriteria } from "../lib/kriteria/useGetkriteria";
import { useQuery } from "@tanstack/react-query";

const PerbandinganAlternatifPage = () => {
  const [v1, setV1] = React.useState({});
  const [kriteria, setKriteria] = useState([]); // Simpan data kriteria
  const [alternatif, setAlternatif] = useState([]); // Simpan data alternatif
  console.table("value", v1);

  useQuery({
    queryKey: ["useGetkriteria"],
    queryFn: useGetkriteria,
    onSuccess: (res) => {
      setKriteria(res); // Simpan data kriteria ke state
    },
  });

  useQuery({
    queryKey: ["useGetalternatif"],
    queryFn: useGetalternatif,
    onSuccess: (res) => {
      setAlternatif(res); // Simpan data alternatif ke state
    },
  });

  function generateRandomValue() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const pasanganNilai = [];
  const [inputValues, setInputValues] = useState(pasanganNilai.map(() => 1));
  for (let i = 0; i < kriteria.length; i++) {
    for (let j = 0; j < alternatif.length; j++) {
      const nilaiA = generateRandomValue();
      const nilaiB = generateRandomValue();

      pasanganNilai.push([
        { ...kriteria[i], nilai: nilaiA },
        { ...alternatif[j], nilai: nilaiB },
      ]);
    }
  }

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleValueChange = (index, value, stateSetter) => {
    stateSetter((prevState) => ({
      ...prevState,
      [index]: value,
    }));
  };

  return (
    <Layout>
      <div className="flex items-center justify-between">
        <Title>Perbandingan Kriteria</Title>
        <div>
          <Button leftIcon={<MdDataSaverOff />} colorScheme="green" size="sm">
            <NavLink to="/proses">Submit</NavLink>
          </Button>
          <NavLink to="/perbandinganalternatif">
            <Button
              rightIcon={<BsArrowRightShort />}
              colorScheme="green"
              size="sm"
              ml={2}
            >
              Lanjut
            </Button>
          </NavLink>
        </div>
      </div>
      <TableContainer mt={5}>
        <Table>
          <Thead>
            <Tr>
              <Th>Pilih yang lebih penting</Th>
              <Th isNumeric>Nilai perbandingan</Th>
            </Tr>
          </Thead>
          <Tbody>
            {pasanganNilai.map((pasangan, index) => (
              <Tr key={index}>
                <Td>
                  <RadioGroup
                    onChange={(value) => handleValueChange(index, value, setV1)}
                    value={v1[index] || ""}
                  >
                    <Radio value={`${pasangan[0].nama} `} w="50%">
                      Apa {pasangan[0].nama} dominan dari {pasangan[1].nama} ?
                    </Radio>
                    <Radio value={`${pasangan[1].nama}`}>
                      Apakah {pasangan[1].nama} lebih dari {pasangan[0].nama} ?
                    </Radio>
                  </RadioGroup>
                </Td>
                <Td isNumeric>
                  <NumberInput
                    defaultValue={inputValues[index]}
                    min={1}
                    max={9}
                    onChange={(value) => handleInputChange(index, value)}
                  >
                    <NumberInputField w={40} h={8} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default PerbandinganAlternatifPage;

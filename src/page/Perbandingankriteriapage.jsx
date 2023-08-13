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
  // number input
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

const Perbandingankriteriapage = () => {
  const [v1, setV1] = React.useState(null);
  const [v2, setV2] = React.useState(null);
  const [v3, setV3] = React.useState(null);
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
            <Tr>
              <Td>
                <RadioGroup onChange={setV1} value={v1}>
                  <Radio value="1" mr={20}>
                    Perbandingan 1
                  </Radio>
                  <Radio value="2">Perbandingan 1</Radio>
                </RadioGroup>
              </Td>
              <Td isNumeric>
                <NumberInput defaultValue={1} min={1} max={9}>
                  <NumberInputField w={40} h={8} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <RadioGroup onChange={setV2} value={v2}>
                  <Radio value="1" mr={20}>
                    Perbandingan 1
                  </Radio>
                  <Radio value="2">Perbandingan 1</Radio>
                </RadioGroup>
              </Td>
              <Td isNumeric>
                <NumberInput defaultValue={1} min={1} max={9}>
                  <NumberInputField w={40} h={8} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <RadioGroup onChange={setV3} value={v3}>
                  <Radio value="1" mr={20}>
                    Perbandingan 1
                  </Radio>
                  <Radio value="2">Perbandingan 1</Radio>
                </RadioGroup>
              </Td>
              <Td isNumeric>
                <NumberInput defaultValue={1} min={1} max={9}>
                  <NumberInputField w={40} h={8} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Perbandingankriteriapage;

import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Title from "../components/Title";
import { NavLink } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  // alert
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Button,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useGetkriteria } from "../lib/kriteria/useGetkriteria";
import { useGetalternatif } from "../lib/alternatif/useGetalternatif";

const Prosespage = () => {
  const [kriteria, setKriteria] = useState([]);
  const [alternatif, setAlternatif] = useState([]);
  const [matrix, setMatrix] = useState([]);
  const [weights, setWeights] = useState([]);
  console.table("m", matrix);
  console.log("w", weights);

  useQuery({
    queryKey: ["useGetkriteria"],
    queryFn: useGetkriteria,
    onSuccess: (res) => {
      setKriteria(res);
    },
  });
  useQuery({
    queryKey: ["useGetalternatif"],
    queryFn: useGetalternatif,
    onSuccess: (res) => {
      setAlternatif(res);
    },
  });

  useEffect(() => {
    const initializedMatrix = initializeMatrix(
      kriteria.length,
      alternatif.length
    );
    setMatrix(initializedMatrix);
  }, [kriteria, alternatif]);

  const initializeMatrix = (rowCount, colCount) => {
    const matrix = [];
    for (let i = 0; i < rowCount; i++) {
      matrix.push(new Array(colCount).fill(1));
    }
    return matrix;
  };

  const handleMatrixChange = (rowIndex, colIndex, value) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[rowIndex][colIndex] = parseFloat(value);
    setMatrix(updatedMatrix);
  };

  const calculateWeights = () => {
    const rowCount = matrix.length;
    const colCount = matrix[0].length;

    const rowSums = new Array(rowCount).fill(0);
    for (let i = 0; i < rowCount; i++) {
      for (let j = 0; j < colCount; j++) {
        rowSums[i] += matrix[i][j];
      }
    }

    const normalizedMatrix = matrix.map((row, i) =>
      row.map((value) => value / rowSums[i])
    );

    const colAverages = new Array(colCount).fill(0);
    for (let j = 0; j < colCount; j++) {
      for (let i = 0; i < rowCount; i++) {
        colAverages[j] += normalizedMatrix[i][j];
      }
      colAverages[j] /= rowCount;
    }

    setWeights(colAverages);
  };

  return (
    <Layout>
      <div>
        <div className="mb-10">
          <Title>Matrix Perbandingan Berpasangan</Title>
          <Button onClick={() => calculateWeights()}>Kalikulasi</Button>
          <TableContainer mt={2}>
            <Table borderWidth={2} borderTopColor="green" borderTopWidth={3}>
              <Thead>
                <Tr>
                  <Th>Kriteria</Th>
                  {alternatif.map((alternatifItem, colIndex) => (
                    <Th key={colIndex}>{alternatifItem.nama}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {kriteria.map((kriteriaItem, rowIndex) => (
                  <Tr key={rowIndex}>
                    <Td>{kriteriaItem.nama}</Td>
                    {alternatif.map((alternatifItem, colIndex) => (
                      <Td key={colIndex}>{matrix[rowIndex][colIndex]}</Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
        <div className="mb-10">
          <Title>Matrix Nilai Kriteria</Title>
          <TableContainer mt={2}>
            <Table borderWidth={2} borderTopColor="green" borderTopWidth={3}>
              <Thead>
                <Tr>
                  <Th>Kriteria</Th>
                  <Th>SMK 1 Indonesia</Th>
                  <Th>SMK 1 Indonesia</Th>
                  <Th>SMK 1 Indonesia</Th>
                  <Th>Jumlah</Th>
                  <Th>Priority Vector</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>SMK 1 Indonesia</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td>25.4</Td>
                  <Td>25.4</Td>
                  <Td>25.4</Td>
                </Tr>
                <Tr>
                  <Td>SMK 1 Indonesia</Td>
                  <Td>centimetres (cm)</Td>
                  <Td>30.48</Td>
                  <Td>30.48</Td>
                  <Td>30.48</Td>
                  <Td>30.48</Td>
                </Tr>
                <Tr>
                  <Td>SMK 1 Indonesia</Td>
                  <Td>metres (m)</Td>
                  <Td>0.91444</Td>
                  <Td>0.91444</Td>
                  <Td>0.91444</Td>
                  <Td>0.91444</Td>
                </Tr>
                <Tr>
                  <Td>Pricipe Eigen Vektor (λ Maks)</Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td>0.91444</Td>
                </Tr>
                <Tr>
                  <Td>Consistency Index</Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td>0.91444</Td>
                </Tr>
                <Tr>
                  <Td>Consistency Rasio</Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td>0.91444</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
        <Alert status="error" my={5}>
          <AlertIcon />
          <Box>
            <AlertTitle>Nilai Consistency Rasio Melebihi 10%!!!</AlertTitle>
            <AlertDescription>
              Mohon input kembali tabel perbandingan...
            </AlertDescription>
          </Box>
        </Alert>
        <div className="mb-10">
          <NavLink to="/">
            <Button
              leftIcon={<BsArrowLeftShort />}
              colorScheme="green"
              size="sm"
            >
              Kembali
            </Button>
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Prosespage;

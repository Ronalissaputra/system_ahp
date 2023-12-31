import React from "react";
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

const Rankingpage = () => {
  return (
    <Layout>
      <div>
        <div className="mb-10">
          <Title>Hasil Perhitungan</Title>
          <TableContainer mt={2}>
            <Table borderWidth={2} borderTopColor="green" borderTopWidth={3}>
              <Thead>
                <Tr>
                  <Th>Kriteria</Th>
                  <Th>SMK 1 Indonesia</Th>
                  <Th>SMK 1 Indonesia</Th>
                  <Th>SMK 1 Indonesia</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>SMK 1 Indonesia</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td>25.4</Td>
                </Tr>
                <Tr>
                  <Td>SMK 1 Indonesia</Td>
                  <Td>centimetres (cm)</Td>
                  <Td>30.48</Td>
                  <Td>30.48</Td>
                </Tr>
                <Tr>
                  <Td>SMK 1 Indonesia</Td>
                  <Td>metres (m)</Td>
                  <Td>0.91444</Td>
                  <Td>0.91444</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
        <div className="mb-10">
          <Title>Perangkingan</Title>
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
      </div>
    </Layout>
  );
};

export default Rankingpage;

import React from "react";
import Layout from "../layout/Layout";
import Title from "../components/Title";
import { TiDeleteOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tfoot,
  Button,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Alternatifpage = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <Title>Alternatif</Title>
        <div>
          <Button leftIcon={<IoIosAdd />} colorScheme="green" size="sm">
            Tambah
          </Button>
          <NavLink to="/perbandingankriteria">
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
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th w={10}>No</Th>
              <Th>Alternatif</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>
                <Button leftIcon={<CiEdit />} colorScheme="teal" size="sm">
                  Edit
                </Button>
                <Button
                  leftIcon={<TiDeleteOutline />}
                  colorScheme="red"
                  size="sm"
                  ml={2}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>
                <Button leftIcon={<CiEdit />} colorScheme="teal" size="sm">
                  Edit
                </Button>
                <Button
                  leftIcon={<TiDeleteOutline />}
                  colorScheme="red"
                  size="sm"
                  ml={2}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>
                <Button leftIcon={<CiEdit />} colorScheme="teal" size="sm">
                  Edit
                </Button>
                <Button
                  leftIcon={<TiDeleteOutline />}
                  colorScheme="red"
                  size="sm"
                  ml={2}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Alternatifpage;

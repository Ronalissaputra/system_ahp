import React from "react";
import Layout from "../layout/Layout";
import Title from "../components/Title";
import { TiDeleteOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Modalx from "../components/Modalx";

const Kriteriapage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout>
      <Modalx
        isOpen={isOpen}
        onClose={onClose}
        Title="Tambah Kriteria"
        Btntitle="Submit"
        Placeholder="Nama kriteria"
      />
      <div className="flex justify-between items-center">
        <Title>Kriteria</Title>
        <div>
          <Button
            onClick={onOpen}
            leftIcon={<IoIosAdd />}
            colorScheme="green"
            size="sm"
          >
            Tambah
          </Button>
          <NavLink to="/alternatif">
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
              <Th>Kriteria</Th>
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

export default Kriteriapage;

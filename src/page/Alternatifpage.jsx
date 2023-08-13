import React, { useState } from "react";
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
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Modalx from "../components/Modalx";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useGetalternatif } from "../lib/alternatif/useGetalternatif";
import { usGetalternatifbyid } from "../lib/alternatif/usGetalternatifbyid";
import { usUpdatealternatif } from "../lib/alternatif/usUpdatealternatif";
import { useCreatealternatif } from "../lib/alternatif/useCreatealternatif";
import { useDeletealternatif } from "../lib/alternatif/useDeletealternatif";

const Alternatifpage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [items, setItems] = useState();
  const [oneData, setOneData] = useState();
  const queryClient = useQueryClient();

  useQuery({
    queryKey: ["getAlternatif"],
    queryFn: useGetalternatif,
    onSuccess: (res) => {
      setItems(res);
    },
  });

  const { mutate: create } = useMutation({
    mutationKey: ["useCreatealternatif"],
    mutationFn: useCreatealternatif,
    onSuccess: (res) => {
      queryClient.refetchQueries("useGetalternatif");
      formik.resetForm();
      onClose();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const { mutate: edit } = useMutation({
    mutationKey: ["Updatealternatif"],
    mutationFn: (values) => usUpdatealternatif(oneData.id, values),
    onSuccess: (res) => {
      queryClient.refetchQueries("useGetalternatif");
      formik.resetForm();
      setOneData(null);
      onClose();
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const { mutate: deleted } = useMutation({
    mutationKey: ["useDeletealternatif"],
    mutationFn: useDeletealternatif,
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries("useGetalternatif");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nama: oneData?.nama || "",
    },
    onSubmit: (values) => {
      if (oneData) {
        edit(values);
      } else {
        create(values);
      }
    },
  });

  const hadleEdit = (id) => {
    usGetalternatifbyid(id)
      .then((res) => {
        setOneData(res);
      })
      .catch((err) => {
        console.log(err);
      });

    onOpen();
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("apakah anda ingin menghapus");
    if (confirm) {
      deleted(id);
    }
  };

  return (
    <Layout>
      <Modalx
        isOpen={isOpen}
        Title={oneData ? "Edit Alternatif" : "Tambah Alternatif"}
        Btntitle={oneData ? "Edit" : "Submit"}
        Placeholder="Nama alternatif"
        onSubmit={formik.handleSubmit}
        onClose={() => {
          setOneData(null);
          onClose();
        }}
      >
        <input
          name="nama"
          value={formik.values.nama}
          onChange={formik.handleChange}
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Nama alternatif"
          required
        />
      </Modalx>
      <div className="flex justify-between items-center">
        <Title>Alternatif</Title>
        <div>
          <Button
            onClick={onOpen}
            leftIcon={<IoIosAdd />}
            colorScheme="green"
            size="sm"
          >
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
            {items &&
              items.map((item, index) => (
                <Tr>
                  <Td>{index + 1}</Td>
                  <Td>{item.nama}</Td>
                  <Td isNumeric>
                    <Button
                      onClick={() => hadleEdit(item.id)}
                      leftIcon={<CiEdit />}
                      colorScheme="teal"
                      size="sm"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      leftIcon={<TiDeleteOutline />}
                      colorScheme="red"
                      size="sm"
                      ml={2}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Alternatifpage;

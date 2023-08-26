import React, { useState } from "react";
import { Input, Stack, Button, Text, Checkbox } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { useCreateuser } from "../lib/user/useCreateuser";
import { Spinner, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Registerpage = () => {
  const [show, setShow] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["useCreateuser"],
    mutationFn: useCreateuser,
    onSuccess: (res) => {
      toast({
        title: "Register berhasil..",
        status: "success",
        isClosable: true,
        position: "top-center",
        duration: 2500,
      });
      setTimeout(() => {
        navigate("/");
      }, 2500);
    },
    onError: (err) => {
      toast({
        title: `${err.response.data.message}`,
        status: "error",
        isClosable: true,
        position: "top-center",
        duration: 4000,
      });
    },
  });

  const formik = useFormik({
    initialValues: {
      nama: "",
      email: "",
      password: "",
      confPassword: "",
      role: "user",
    },
    onSubmit: (values) => {
      mutate(values);
    },
    validate: (values) => {
      const errors = {};

      if (!values.nama) {
        errors.nama = "Nama harus diisi";
      } else if (values.nama.length < 3) {
        errors.nama = "Nama harus memiliki setidaknya 3 karakter";
      }

      if (!values.email) {
        errors.email = "Email harus diisi";
      }

      if (!values.password) {
        errors.password = "Password harus diisi";
      }

      if (!values.confPassword) {
        errors.confPassword = "Konfirmasi password harus diisi";
      } else if (values.confPassword !== values.password) {
        errors.confPassword = "Konfirmasi password tidak sesuai";
      }

      return errors;
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="lg:w-[450px] w-full mx-2 h-auto">
        <Stack spacing={6}>
          <Input
            name="nama"
            value={formik.values.nama}
            onChange={formik.handleChange}
            variant="outline"
            placeholder="Username"
            h={50}
            borderColor="gray.500"
            borderWidth={2}
          />
          {formik.errors.nama && (
            <Text color="red.500">{formik.errors.nama}</Text>
          )}
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            variant="outline"
            placeholder="Email"
            h={50}
            borderColor="gray.500"
            borderWidth={2}
          />
          {formik.errors.email && (
            <Text color="red.500">{formik.errors.email}</Text>
          )}
          <Input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            variant="outline"
            placeholder="Password"
            type={show ? "text" : "password"}
            h={50}
            borderColor="gray.500"
            borderWidth={2}
          />
          {formik.errors.password && (
            <Text color="red.500">{formik.errors.password}</Text>
          )}
          <Input
            name="confPassword"
            value={formik.values.confPassword}
            onChange={formik.handleChange}
            variant="outline"
            placeholder="Konfirmasi password"
            type={show ? "text" : "password"}
            h={50}
            borderColor="gray.500"
            borderWidth={2}
          />
          {formik.errors.confPassword && (
            <Text color="red.500">{formik.errors.confPassword}</Text>
          )}
          <Checkbox
            onChange={() => setShow(!show)}
            size="lg"
            colorScheme="orange"
          >
            Show password
          </Checkbox>
          <Button
            type="submit" // Change this to type submit
            onClick={formik.handleSubmit}
            colorScheme="facebook"
            backgroundColor="black"
            mt={4}
            h={50}
          >
            {isLoading ? <Spinner /> : "Register"}
          </Button>
          <Text fontSize="lg">
            Sudah punya akun?{" "}
            <NavLink to="/" className="text-blue-600">
              Login
            </NavLink>
          </Text>
        </Stack>
      </div>
    </div>
  );
};

export default Registerpage;

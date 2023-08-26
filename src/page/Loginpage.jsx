import React, { useState } from "react";
import { Input, Stack, Button, Text, Checkbox } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { useLogin } from "../lib/auth/useLogin";
import { useNavigate } from "react-router-dom";
import { Spinner, useToast } from "@chakra-ui/react";

const Loginpage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [show, setShow] = useState(false);

  const { mutate, isLoading } = useMutation({
    mutationKey: ["useLogin"],
    mutationFn: useLogin,
    onSuccess: () => {
      navigate("/home");
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
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      mutate(values);
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Email harus diisi";
      }

      if (!values.password) {
        errors.password = "Password harus diisi";
      }

      return errors;
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="lg:w-[450px] w-full mx-2 h-auto">
        <Stack spacing={6}>
          <Input
            name="email"
            variant="outline"
            placeholder="Email"
            h={50}
            borderColor="gray.500"
            borderWidth={2}
            value={formik.values.email}
            onChange={formik.handleChange}
            required
          />
          {formik.errors.email && (
            <Text color="red.500">{formik.errors.email}</Text>
          )}
          <Input
            name="password"
            variant="outline"
            placeholder="Password"
            type={show ? "text" : "password"}
            h={50}
            borderColor="gray.500"
            borderWidth={2}
            value={formik.values.password}
            onChange={formik.handleChange}
            required
          />
          {formik.errors.password && (
            <Text color="red.500">{formik.errors.password}</Text>
          )}
          <Checkbox
            onChange={() => setShow(!show)}
            size="lg"
            colorScheme="orange"
          >
            Show password
          </Checkbox>
          <Button
            type="button"
            onClick={formik.handleSubmit}
            colorScheme="facebook"
            backgroundColor="black"
            mt={4}
            h={50}
          >
            {isLoading ? <Spinner /> : "Log In"}
          </Button>
          <Text fontSize="lg">
            Belum punya akun?{" "}
            <NavLink to="/register" className="text-blue-600">
              Register
            </NavLink>
          </Text>
        </Stack>
      </div>
    </div>
  );
};

export default Loginpage;

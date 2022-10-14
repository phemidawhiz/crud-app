import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ISetTab } from "../../utils/types";

const Signup = ({ setTab }: ISetTab) => {
  const initialValues = {
    firstname: "",
    lastname: "",
    contract: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    contract: Yup.string(),
  });
  const handleSubmit = () => {};
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-4">
            <label htmlFor="">First name</label>
            <Input
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="John"
              // className="mt-1"
              className={
                touched.firstname && errors.firstname ? "border-danger" : ""
              }
            />
            {errors.firstname && touched.firstname && (
              <p className="text-danger text-sm mt-[0px]">{errors.firstname}</p>
            )}
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="">Last name</label>
            <Input
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Doe"
              // className="mt-1"
              className={
                touched.lastname && errors.lastname ? "border-danger" : ""
              }
            />
            {errors.lastname && touched.lastname && (
              <p className="text-danger text-sm mt-[0px]">{errors.lastname}</p>
            )}
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="">Email</label>
            <Input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="sample@test.com"
              // className="mt-1"
              className={touched.email && errors.email ? "border-danger" : ""}
            />
            {errors.email && touched.email && (
              <p className="text-danger text-sm mt-[0px]">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="">Password</label>
            <Input
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder=""
              // className="mt-1"
              className={
                touched.password && errors.password ? "border-danger" : ""
              }
            />
            {errors.password && touched.password && (
              <p className="text-danger text-sm mt-[0px]">{errors.password}</p>
            )}
          </div>
          <Button className="w-full">CREATE ACCOUNT</Button>
          <p className="text-sm mt-2">
            Already have an account?{" "}
            <span
              className="text-purple cursor-pointer"
              onClick={() => setTab("login")}
            >
              Log in
            </span>
          </p>
        </form>
      )}
    </Formik>
  );
};

export default Signup;

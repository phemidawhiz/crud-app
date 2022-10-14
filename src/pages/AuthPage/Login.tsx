import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ISetTab } from "../../utils/types";

const Login = ({ setTab }: ISetTab) => {
  console.log("object");
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
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
        dirty,
        isValid,
      }) => (
        <form onSubmit={handleSubmit}>
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
          <div className="flex flex-col mt-4">
            <label htmlFor="">Password</label>
            <Input
              name="password"
              type={"password"}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="sample@test.com"
              // className="mt-2"
              className={
                touched.password && errors.password ? "border-danger" : ""
              }
            />
            {errors.password && touched.password && (
              <p className="text-danger text-sm mt-[0px]">{errors.password}</p>
            )}
          </div>
          <Button className="w-full mt-4">LOGIN</Button>
          <p className="text-sm mt-2">
            Don't have an account?{" "}
            <span
              className="text-purple cursor-pointer"
              onClick={() => setTab("signup")}
            >
              Sign up
            </span>
          </p>
        </form>
      )}
    </Formik>
  );
};

export default Login;

import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ILoginPayload, ISetTab } from "../../utils/types";
import { useLogin } from "../../services/customHook/auth";
import { useNotifications } from "../../customHooks";

const Login = ({ setTab }: ISetTab) => {
  const { successAlert, errorAlert } = useNotifications();
  const { mutate: handleLogin, isLoading: isLoginLoading } = useLogin({
    onSuccess: () => {
      successAlert("Login successfull");
    },
    onError: (err: any) => {
      errorAlert(err.message);
    },
  });
  const initialValues: ILoginPayload = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const handleSubmit = (values: ILoginPayload) => {
    handleLogin(values);
  };
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
            <label htmlFor="">Username</label>
            <Input
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your username"
              // className="mt-1"
              className={
                touched.username && errors.username ? "border-danger" : ""
              }
            />
            {errors.username && touched.username && (
              <p className="text-danger text-sm mt-[0px]">{errors.username}</p>
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
          <Button className="w-full mt-4" isLoading={isLoginLoading}>
            LOGIN
          </Button>
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

import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ILoginPayload, ISetTab } from "../../utils/types";
import { useLogin } from "../../services/customHook/auth";
import { useNotifications } from "../../customHooks";
import { setAccessToken } from "../../utils/helpers";
import { userKey } from "../../utils/data";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({ setTab }: ISetTab) => {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );
  const { successAlert, errorAlert } = useNotifications();
  const { mutate: handleLogin, isLoading: isLoginLoading } = useLogin({
    onSuccess: (res: any) => {
      successAlert("Login successfull");
      setAccessToken(userKey, res);
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
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
    username: Yup.string()
      .required("Username is required")
      .max(20, "Username must have at most 20 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must have at least 8 characters"),
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
          <div className="flex flex-col my-4 relative">
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
              <p className="text-danger text-xs mt-[0px] absolute top-[68px]">
                {errors.username}
              </p>
            )}
          </div>
          <div className="flex flex-col mt-4 relative">
            <label htmlFor="">Password</label>
            <div className="flex flex-row items-center">
              <Input
                name="password"
                type={passwordType}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="sample@test.com"
                // className="mt-2"
                className={
                  touched.password && errors.password ? "border-danger" : ""
                }
              />
              <div className="z-50 ml-[-40px]">
                {passwordType === "password" ? (
                  <FaEye
                    cursor={"pointer"}
                    onClick={() => setPasswordType("text")}
                  />
                ) : (
                  <FaEyeSlash
                    cursor={"pointer"}
                    onClick={() => setPasswordType("password")}
                  />
                )}
              </div>
            </div>
            {errors.password && touched.password && (
              <p className="text-danger text-xs mt-[0px] absolute top-[68px]">
                {errors.password}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full mt-8"
            isLoading={isLoginLoading}
            isDisabled={isLoginLoading}
            loadingText="Logging in"
          >
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

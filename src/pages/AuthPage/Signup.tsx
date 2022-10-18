import React, { useState } from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ISetTab, ISignUpPayload } from "../../utils/types";
import { useCreateAccount } from "../../services/customHook/auth";
import { AxiosError } from "axios";
import { useNotifications } from "../../customHooks";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = ({ setTab }: ISetTab) => {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );
  const { successAlert, errorAlert } = useNotifications();
  const { mutate: handleCreateAccount, isLoading: isCreateAccountLoading } =
    useCreateAccount({
      onSuccess: (res: any) => {
        successAlert("Sign up successful");
        setTimeout(() => {
          setTab("login");
        }, 1500);
      },
      onError: (err: AxiosError) => {
        errorAlert(err.message);
        console.log(err);
      },
    });
  const initialValues: ISignUpPayload = {
    firstname: "",
    lastname: "",
    emailaddress: "",
    gender: "",
    password: "",
    username: "",
  };
  const validationSchema = Yup.object().shape({
    emailaddress: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    gender: Yup.string().required("Gender is required"),
    username: Yup.string().required("Username is required"),
  });
  const handleSubmit = (values: ISignUpPayload) => {
    const username = values.emailaddress.split("@")[0];
    const signUpDetails = { ...values, username };
    handleCreateAccount(signUpDetails);
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
              <p className="text-danger text-xs mt-[0px] absolute top-[68px]">
                {errors.firstname}
              </p>
            )}
          </div>
          <div className="flex flex-col my-4 relative">
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
              <p className="text-danger text-xs mt-[0px] absolute top-[68px]">
                {errors.lastname}
              </p>
            )}
          </div>
          <div className="flex flex-col my-4 relative">
            <label htmlFor="">Email</label>
            <Input
              name="emailaddress"
              value={values.emailaddress}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="sample@test.com"
              // className="mt-1"
              className={
                touched.emailaddress && errors.emailaddress
                  ? "border-danger"
                  : ""
              }
            />
            {errors.emailaddress && touched.emailaddress && (
              <p className="text-danger text-xs mt-[0px] absolute top-[68px]">
                {errors.emailaddress}
              </p>
            )}
          </div>
          <div className="flex flex-col my-4 relative">
            <label htmlFor="">Username</label>
            <Input
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder=""
              // className="mt-1"
              className={
                touched.username && errors.emailaddress ? "border-danger" : ""
              }
            />
            {errors.username && touched.username && (
              <p className="text-danger text-xs mt-[0px] absolute top-[68px]">
                {errors.username}
              </p>
            )}
          </div>
          <div className="flex flex-col my-4 relative">
            <label htmlFor="">Password</label>
            <div className="flex flex-row items-center">
              <Input
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=""
                type={passwordType}
                // className="mt-1"
                className={`relative ${
                  touched.password && errors.password ? "border-danger" : ""
                }`}
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
          <div className="flex flex-col my-4 relative">
            <label htmlFor="">Gender</label>
            <Field
              as="select"
              name="gender"
              className="py-2 border-2 rounded-md border-gray"
            >
              <option value="">Gender</option>

              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
            </Field>
            {errors.gender && touched.gender && (
              <p className="text-danger text-xs mt-[0px] absolute top-[68px]">
                {errors.gender}
              </p>
            )}
          </div>
          <Button
            isLoading={isCreateAccountLoading}
            isDisabled={isCreateAccountLoading}
            loadingText="Submitting"
            type="submit"
            className="w-full mt-8"
          >
            CREATE ACCOUNT
          </Button>
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

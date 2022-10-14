import React from "react";
import { Formik } from "formik";
import Container from "../../components/Container";
import Input from "../../components/Input";
import { IContract } from "../../utils/types";
import * as Yup from "yup";
import Button from "../../components/Button";

const CreatePage = () => {
  const initialValues: IContract = {
    website: "",
    representedBy: "",
    activated: false,
    companyAddress: "",
    companyName: "",
    companyRegistrationNumber: "",
    title: "",
    email: "",
    telephoneFax: "",
    nationality: "",
  };
  const validationSchema = Yup.object().shape({
    website: Yup.string().required("Website is required"),
    representedBy: Yup.string().required("Represented by is required"),
    activated: Yup.boolean(),
    companyAddress: Yup.string().required("Company address is required"),
    companyName: Yup.string().required("Company name is required"),
    companyRegistrationNumber: Yup.number().required(
      "Company reg number is required"
    ),
    title: Yup.string().required("Title is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    telephoneFax: Yup.string().required("Phone is required"),
    nationality: Yup.string().required("Nationality is required"),
  });
  const handleSubmit = () => {};
  return (
    <Container>
      <div className="flex flex-row justify-center items-center h-screen">
        <div className="border-2 rounded-lg border-[#ddd] w-[90%] lg:w-[50%] md:w-[60%]">
          <h3 className="text-2xl text-purple font-bold text-center my-2 mt-4">
            Create a new buyer
          </h3>

          <div className="px-8 p-8">
            <Formik
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
              initialValues={initialValues}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-8 "
                >
                  <div>
                    <label htmlFor="companyName" className="font-semibold">
                      Company Name
                    </label>
                    <Input
                      name="companyName"
                      value={values.companyName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Company Name"
                      className={`relative  ${
                        touched.companyName && errors.companyName
                          ? "border-danger"
                          : ""
                      }`}
                    />
                    {errors.companyName && touched.companyName && (
                      <p className="absolute text-danger text-xs mt-[0px]">
                        {errors.companyName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="companyAddress" className="font-semibold">
                      Company Address
                    </label>
                    <Input
                      name="companyAddress"
                      value={values.companyAddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Company Address"
                      className={`relative  ${
                        touched.companyAddress && errors.companyAddress
                          ? "border-danger"
                          : ""
                      }`}
                    />
                    {errors.companyAddress && touched.companyAddress && (
                      <p className="absolute text-danger text-xs mt-[0px]">
                        {errors.companyAddress}
                      </p>
                    )}
                  </div>{" "}
                  <div>
                    <label htmlFor="companyName" className="font-semibold">
                      Company Reg. Number
                    </label>
                    <Input
                      name="companyRegistrationNumber"
                      value={values.companyRegistrationNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="RC-XXXXX"
                      className={`relative  ${
                        touched.companyRegistrationNumber &&
                        errors.companyRegistrationNumber
                          ? "border-danger"
                          : ""
                      }`}
                    />
                    {errors.companyRegistrationNumber &&
                      touched.companyRegistrationNumber && (
                        <p className="absolute  text-danger text-xs mt-[0px]">
                          {errors.companyRegistrationNumber}
                        </p>
                      )}
                  </div>{" "}
                  <div>
                    <label htmlFor="telephoneFax" className="font-semibold">
                      Telephone Fax
                    </label>
                    <Input
                      name="telephoneFax"
                      value={values.telephoneFax}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Telephone Fax"
                      className={`relative ${
                        touched.telephoneFax && errors.telephoneFax
                          ? "border-danger"
                          : ""
                      }`}
                    />
                    {errors.telephoneFax && touched.telephoneFax && (
                      <p className="absolute  text-danger text-xs mt-[0px]">
                        {errors.telephoneFax}
                      </p>
                    )}
                  </div>{" "}
                  <div>
                    <label htmlFor="title" className="font-semibold">
                      Title
                    </label>
                    <Input
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Title"
                      className={`relative ${
                        touched.title && errors.title ? "border-danger" : ""
                      }`}
                    />
                    {errors.title && touched.title && (
                      <p className="absolute  text-danger text-xs mt-[0px]">
                        {errors.title}
                      </p>
                    )}
                  </div>{" "}
                  <div>
                    <label htmlFor="email" className="font-semibold">
                      Email
                    </label>
                    <Input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="sample@test.com"
                      className={`relative  ${
                        touched.email && errors.email ? "border-danger" : ""
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p className="absolute  text-danger text-xs mt-[0px]">
                        {errors.email}
                      </p>
                    )}
                  </div>{" "}
                  <div>
                    <label htmlFor="website" className="font-semibold">
                      Website
                    </label>
                    <Input
                      name="website"
                      value={values.website}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="yourwebsite.com"
                      type={"url"}
                      className={`relative ${
                        touched.website && errors.website ? "border-danger" : ""
                      }`}
                    />
                    {errors.website && touched.website && (
                      <p className="absolute  text-danger text-xs mt-[0px]">
                        {errors.website}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="Nationality" className="font-semibold">
                      Nationality
                    </label>
                    <Input
                      name="nationality"
                      value={values.nationality}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Nationality"
                      className={`relative  ${
                        touched.nationality && errors.nationality
                          ? "border-danger"
                          : ""
                      }`}
                    />
                    {errors.nationality && touched.nationality && (
                      <p className="absolute  text-danger text-xs mt-[0px]">
                        {errors.nationality}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="representedBy" className="font-semibold">
                      Represented By
                    </label>
                    <Input
                      name="representedBy"
                      value={values.representedBy}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Mark"
                      className={`relative  ${
                        touched.nationality && errors.representedBy
                          ? "border-danger"
                          : ""
                      }`}
                    />
                    {errors.representedBy && touched.representedBy && (
                      <p className="absolute  text-danger text-xs mt-[0px]">
                        {errors.representedBy}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="representedBy" className="font-semibold">
                      Represented By
                    </label>
                    <Input
                      name="representedBy"
                      // value={values.activated}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type={"checkbox"}
                      className={`relative  ${
                        touched.activated && errors.activated
                          ? "border-danger"
                          : ""
                      }`}
                    />
                    {errors.activated && touched.activated && (
                      <p className="absolute  text-danger text-xs mt-[0px]">
                        {errors.activated}
                      </p>
                    )}
                  </div>
                  <Button className="col-span-2 mt-4">CREATE BUYER</Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreatePage;

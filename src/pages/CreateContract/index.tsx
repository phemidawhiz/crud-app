import React from "react";
import { Field, Formik } from "formik";
import Container from "../../components/Container";
import Input from "../../components/Input";
import { IContract, ICreateBuyerPayload } from "../../utils/types";
import * as Yup from "yup";
import Button from "../../components/Button";
import Goback from "../../components/GoBack";
import { useCreateContract } from "../../services/customHook";
import { useNotifications } from "../../customHooks";

const CreatePage = () => {
  const { successAlert, errorAlert } = useNotifications();
  const initialValues: ICreateBuyerPayload = {
    website: "",
    representedBy: "",
    // activated: false,
    companyAddress: "",
    companyName: "",
    companyRegistrationNumber: "",
    // title: "",
    email: "",
    telephoneFax: "",
    status: "",
  };
  const validationSchema = Yup.object().shape({
    website: Yup.string().required("Website is required"),
    representedBy: Yup.string().required("Represented by is required"),
    // activated: Yup.boolean(),
    companyAddress: Yup.string().required("Company address is required"),
    companyName: Yup.string().required("Company name is required"),
    companyRegistrationNumber: Yup.string().required(
      "Company reg number is required"
    ),
    // title: Yup.string().required("Title is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    telephoneFax: Yup.string().required("Phone is required"),
    nationality: Yup.string().required("Nationality is required"),
  });
  const { mutate: handleCreateBuyer, isLoading: isCreateBuyerLoading } =
    useCreateContract({
      onSuccess: () => {
        successAlert("Buyer created successfully");
      },
      onError: (err: any) => {
        errorAlert(err.message || "Error occurred");
      },
    });
  const handleSubmit = (values: ICreateBuyerPayload) => {
    handleCreateBuyer(values);
    console.log(values);
  };
  return (
    <Container>
      <div className="mt-8">
        <Goback />
      </div>
      <div className="flex flex-row justify-center items-center h-screen">
        <div className="border-2 rounded-lg border-[#ddd] w-full sm:w-[100%] lg:w-[50%] md:w-[60%] md:mt-[0px] mt-[500px] pb-8">
          <h3 className="text-2xl text-purple font-bold text-center my-2  md:mt-4">
            Create a new buyer
          </h3>

          <div className="w-[100%] px-4">
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
                  className="flex flex-row flex-wrap w-[100%] justify-between  gap-y-8"
                >
                  <div className="md:w-[48%] w-[100%]">
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
                  <div className="md:w-[48%] w-[100%]">
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
                  <div className="md:w-[48%] w-[100%]">
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
                  <div className="md:w-[48%] w-[100%]">
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
                  {/* <div className="md:w-[48%] w-[100%]">
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
                  </div>{" "} */}
                  <div className="md:w-[48%] w-[100%]">
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
                  <div className="md:w-[48%] w-[100%]">
                    <label htmlFor="website" className="font-semibold">
                      Website
                    </label>
                    <Input
                      name="website"
                      value={values.website}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="yourwebsite.com"
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
                  {/* <div className="md:w-[48%] w-[100%]">
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
                  </div> */}
                  {/* <div className="md:w-[48%] w-[100%]">
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
                  </div> */}
                  <div className="md:w-[48%] w-[100%] flex flex-col items-left">
                    <label id="my-radio-group" className="font-semibold">
                      Is buyer activated?
                    </label>
                    <div
                      role="group"
                      className="flex flex-row gap-4 items-center mt-2"
                      aria-labelledby="my-radio-group"
                    >
                      <label className="cursor-pointer">
                        <Field
                          className="mr-2"
                          type="radio"
                          name="status"
                          value={"ACTIVE"}
                        />
                        ACTIVE
                      </label>
                      <label className="cursor-pointer">
                        <Field
                          className="mr-2"
                          type="radio"
                          name="status"
                          value={"INACTIVE"}
                        />
                        INACTIVE
                      </label>
                    </div>
                  </div>
                  <div className="w-full">
                    <Button
                      isLoading={isCreateBuyerLoading}
                      className="col-span-2 mt-4 w-full "
                      type="submit"
                    >
                      CREATE BUYER
                    </Button>
                  </div>
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

import { Field, Formik } from "formik";
import Container from "../../components/Container";
import Input from "../../components/Input";
import { ICreateBuyerPayload } from "../../utils/types";
import * as Yup from "yup";
import Button from "../../components/Button";
import Goback from "../../components/GoBack";
import {
  useGetContractById,
  useUpdateContract,
  useUploadFile,
} from "../../services/customHook";
import { useNotifications } from "../../customHooks";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ALL_BUYERS } from "../../services/customHook/queryKeys";
import { useQueryClient } from "@tanstack/react-query";

const UpdateContract = () => {
  const [file, setFile] = useState<any>(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { buyerId = "" } = useParams();
  const { successAlert, errorAlert } = useNotifications();
  const { data: contractDetails } = useGetContractById(buyerId);
  const { mutate: handleUpdateBuyer, isLoading: isUpdateBuyerLoading } =
    useUpdateContract({
      onSuccess: async () => {
        await queryClient.refetchQueries([ALL_BUYERS]);
        successAlert("Buyer details updated successfully");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      },
      onError: (err: any) => {
        errorAlert(err.message || "Error occurred");
      },
    });
  const initialValues: ICreateBuyerPayload = {
    website: contractDetails?.website || "",
    representedBy: contractDetails?.representedBy || "",
    // status: contractDetails?.status || "",
    companyAddress: contractDetails?.companyAddress || "",
    companyName: contractDetails?.companyName || "",
    companyRegistrationNumber: contractDetails?.companyRegistrationNumber || "",
    email: contractDetails?.email || "",
    telephoneFax: contractDetails?.telephoneFax || "",
    nationality: contractDetails?.nationality || "",
    status: contractDetails?.status || "",
  };
  const validationSchema = Yup.object().shape({
    website: Yup.string().required("Website is required"),
    representedBy: Yup.string().required("Represented by is required"),
    companyAddress: Yup.string().required("Company address is required"),
    companyName: Yup.string().required("Company name is required"),
    companyRegistrationNumber: Yup.string().required(
      "Company reg number is required"
    ),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    telephoneFax: Yup.string().required("Phone is required"),
    nationality: Yup.string().required("Nationality is required"),
    status: Yup.string().required("Status is required"),
  });
  const handleSubmit = (values: ICreateBuyerPayload) => {
    const updatedContractDetails = { ...values, id: contractDetails.id };
    handleUpdateBuyer(updatedContractDetails);
  };
  const { mutate: fileUpload, isLoading: isFileUploading } = useUploadFile({
    onSuccess: (_res: any) => {
      successAlert("File upload successful");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    },
    onError: (err: any) => {
      console.log(err);
      errorAlert("File upload failed. Please try again");
    },
  });
  const handleSubmitFile = (e: any) => {
    e.preventDefault();
    const fd = new FormData();

    fd.append("file", file);
    fileUpload({ fd, buyerId });
  };
  return (
    <Container>
      <div className="mt-8">
        <Goback />
      </div>
      <div className="border-[1px] rounded-lg mx-auto w-full sm:w-[100%] lg:w-[50%] md:w-[60%] p-4">
        <form
          onSubmit={handleSubmitFile}
          className="flex flex-row items-center justify-between px-2 w-full py-4"
        >
          <input
            type={"file"}
            name="file"
            onChange={(e: any) => setFile(e.target.files[0])}
          />
          <Button
            loadingText="Uploading"
            isLoading={isFileUploading}
            isDisabled={isFileUploading || !file}
            type="submit"
          >
            Upload
          </Button>
        </form>
      </div>
      <div className="flex flex-row justify-center items-center h-screen">
        <div className="border-2 rounded-lg border-[#ddd] w-full sm:w-[100%] lg:w-[50%] md:w-[60%] md:mt-[0px] mt-[450px] pb-8">
          <h3 className="text-2xl text-purple font-bold text-center my-4 md:my-2  md:mt-4">
            Update Buyer Details
          </h3>

          <div className="w-[100%] px-4">
            <Formik
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
              initialValues={initialValues}
              enableReinitialize={true}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid,
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
                  <div className="md:w-[48%] w-[100%]">
                    <label htmlFor="Nationality" className="font-semibold">
                      Nationality
                    </label>
                    <Input
                      name="nationality"
                      value={values.nationality}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Nationality"
                      disabled
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
                  <div className="md:w-[48%] w-[100%]">
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
                  <div className="md:w-[48%] w-[100%] flex flex-col items-left">
                    <label id="my-radio-group" className="font-semibold">
                      Is status active?
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
                      <label className=" cursor-pointer">
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
                      isLoading={isUpdateBuyerLoading}
                      isDisabled={!isValid || isUpdateBuyerLoading}
                      className="w-full"
                    >
                      UPDATE BUYER
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

export default UpdateContract;

import { fakeBuyerDetails } from "../../utils/data";
import axiosInstance from "../axiosInstance";

export const getAllContracts = async () => {
  // const res = await axiosInstance.get("");

  return fakeBuyerDetails;
};

export const getContractById = async (id: string) => {
  // const res = await axiosInstance(`${id}`);

  return {
    activated: true,
    website: "https://stacopoc@stacoinc.com",
    title: "Mr",
    representedBy: "Moran Stanton",
    companyName: "ILLUMITY",
    email: "moranstanton@illumity.com",
    telephoneFax: "+23 (877) 528-2476",
    companyAddress: "796 Knight Court, Wanship, Maryland, 4544",
    nationality: "Mexico",
    companyRegistrationNumber: "RC77383",
  };
};

export const createContract = async (body: any) => {
  const res = await axiosInstance.post("", body);
  return res.data;
};

export const updateContract = async (body: any) => {
  const res = await axiosInstance.put("", body);
  return res.data;
};

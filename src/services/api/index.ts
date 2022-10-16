import { fakeBuyerDetails } from "../../utils/data";
import { ICreateBuyerPayload } from "../../utils/types";
import axiosInstance from "../axiosInstance";
export const getAllContracts = async (pageNo = 1, pageSize = 10) => {
  const res = await axiosInstance.get(
    `/buyers/?all=yes&page=${pageNo}&take=${pageSize}`
  );
  console.log(res);

  return fakeBuyerDetails;
};

export const getContractById = async (id: string) => {
  const res = await axiosInstance(`/buyers/${id}`);
  console.log(res);
  return {
    status: "INACTIVE",
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

export const createContract = async (body: ICreateBuyerPayload) => {
  const res = await axiosInstance.post("/buyers", body);
  return res.data;
};

export const updateContract = async (body: ICreateBuyerPayload) => {
  const res = await axiosInstance.put("/buyers", body);
  return res.data;
};

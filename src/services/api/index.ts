import { fakeBuyerDetails } from "../../utils/data";
import axiosInstance from "../axiosInstance";

export const getAllContracts = async () => {
  // const res = await axiosInstance.get("");

  return fakeBuyerDetails;
};

export const getContractById = async (id: string) => {
  const res = await axiosInstance(`${id}`);
  return res.data;
};

export const createContract = async (body: any) => {
  const res = await axiosInstance.post("", body);
  return res.data;
};

export const updateContract = async (body: any) => {
  const res = await axiosInstance.put("", body);
  return res.data;
};

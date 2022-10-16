// import { fakeBuyerDetails } from "../../utils/data";
import { ICreateBuyerPayload } from "../../utils/types";
import axiosInstance from "../axiosInstance";
export const getAllContracts = async (pageNo: number, pageSize: number) => {
  const res = await axiosInstance.get(
    `/buyers/?all=yes&page=${pageNo}&take=${pageSize}`
  );

  return res.data;
};

export const getContractById = async (id: string) => {
  const res = await axiosInstance(`/buyers/${id}`);
  return res.data;
};

export const createContract = async (body: ICreateBuyerPayload) => {
  const res = await axiosInstance.post("/buyers", body);
  return res.data;
};

export const updateContract = async (body: ICreateBuyerPayload) => {
  const res = await axiosInstance.put(`/buyers/${body.id}`, body);
  return res.data;
};

export const deleteBuyerDetails = async (id: string) => {
  const res = await axiosInstance.delete(`/buyers/${id}`);
  return res.data;
};

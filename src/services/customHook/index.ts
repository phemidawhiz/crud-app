import { useMutation, useQuery } from "@tanstack/react-query";
import { ICreateBuyerPayload } from "../../utils/types";
import {
  createContract,
  deleteBuyerDetails,
  getAllContracts,
  getContractById,
  getFiles,
  updateContract,
  uploadFile,
} from "../api";
import { ALL_BUYERS } from "./queryKeys";

export const useGetContracts = (pageNo = 1, pageSize = "10") =>
  useQuery([ALL_BUYERS, pageNo, pageSize], () =>
    getAllContracts(pageNo, pageSize)
  );

export const useGetContractById = (id: string, options = {}) => {
  return useQuery([`BUYER_${id}`], () => getContractById(id), { ...options });
};

export const useCreateContract = (options = {}) =>
  useMutation((body: ICreateBuyerPayload) => createContract(body), {
    ...options,
  });
export const useUpdateContract = (options = {}) =>
  useMutation((body: ICreateBuyerPayload) => updateContract(body), {
    ...options,
  });

export const useDeleteBuyer = (options = {}) =>
  useMutation((id: string) => deleteBuyerDetails(id), {
    ...options,
  });

export const useUploadFile = (options = {}) =>
  useMutation((body: any) => uploadFile(body), {
    ...options,
  });

export const useGetFiles = () => {
  return useQuery(["files"], () => getFiles());
};

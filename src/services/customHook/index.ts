import { useMutation, useQuery } from "@tanstack/react-query";
import { ICreateBuyerPayload } from "../../utils/types";
import {
  createContract,
  getAllContracts,
  getContractById,
  updateContract,
} from "../api";

export const useGetContracts = () =>
  useQuery(["all contracts"], () => getAllContracts());

export const useGetContractById = (id: string) =>
  useQuery([], () => getContractById(id));

export const useCreateContract = (options = {}) =>
  useMutation((body: ICreateBuyerPayload) => createContract(body), {
    ...options,
  });
export const useUpdateContract = (options = {}) =>
  useMutation((body: ICreateBuyerPayload) => updateContract(body), {
    ...options,
  });

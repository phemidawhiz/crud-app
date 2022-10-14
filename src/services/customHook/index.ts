import { useMutation, useQuery } from "@tanstack/react-query";
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

export const useCreateContract = () =>
  useMutation((body) => createContract(body));
export const useUpdateContract = () =>
  useMutation((body) => updateContract(body));

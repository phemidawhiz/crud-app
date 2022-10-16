import { useMutation } from "@tanstack/react-query";
import { ILoginPayload, ISignUpPayload } from "../../utils/types";
import { createAccount, login } from "../api/auth";

export const useCreateAccount = (options = {}) => {
  return useMutation((body: ISignUpPayload) => createAccount(body), {
    ...options,
  });
};

export const useLogin = (options = {}) => {
  return useMutation((body: ILoginPayload) => login(body), { ...options });
};

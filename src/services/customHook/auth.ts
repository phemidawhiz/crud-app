import { useMutation, useQuery } from "@tanstack/react-query";
import {
  ILoginPayload,
  IResetPasswordPayload,
  ISignUpPayload,
} from "../../utils/types";
import {
  createAccount,
  initiatePasswordReset,
  login,
  resetPassword,
} from "../api/auth";

export const useCreateAccount = (options = {}) => {
  return useMutation((body: ISignUpPayload) => createAccount(body), {
    ...options,
  });
};

export const useLogin = (options = {}) => {
  return useMutation((body: ILoginPayload) => login(body), { ...options });
};

export const useInitiatePasswordReset = (emailId: string, options = {}) => {
  return useQuery(["emailid"], () => initiatePasswordReset(emailId), {
    enabled: !!emailId,
    ...options,
  });
};

export const useResetPassword = (options = {}) => {
  return useMutation((body: IResetPasswordPayload) => resetPassword(body), {
    ...options,
  });
};

import axios from "axios";
import {
  ILoginPayload,
  IResetPasswordPayload,
  ISignUpPayload,
} from "../../utils/types";
import { baseUrl } from "../config";

export const createAccount = async (body: ISignUpPayload) => {
  const res = await axios.post(`${baseUrl}/auth/signup`, body);
  return res.data;
};

export const login = async (body: ILoginPayload) => {
  const res = await axios.post(`${baseUrl}/auth/signin`, body);
  return res.data;
};

export const initiatePasswordReset = async (emailId: string) => {
  const res = await axios.get(`${baseUrl}/auth/password/request/${emailId}`);
  return res.data;
};

export const getToken = async (token: string) => {
  const res = await axios.get(`${baseUrl}/token/${token}`);
  return res.data;
};

export const resetPassword = async (body: IResetPasswordPayload) => {
  const res = await axios.post(
    `${baseUrl}/auth/password/reset/${body.token}`,
    body
  );
  return res.data;
};

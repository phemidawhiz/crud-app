import axios from "axios";
import { ILoginPayload, ISignUpPayload } from "../../utils/types";
import { baseUrl } from "../config";

export const createAccount = async (body: ISignUpPayload) => {
  const res = await axios.post(`${baseUrl}/auth/signup`, body);
  return res.data;
};

export const login = async (body: ILoginPayload) => {
  const res = await axios.post(`${baseUrl}/auth/signin`, body);
  return res.data;
};

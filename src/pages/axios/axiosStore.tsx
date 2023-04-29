import { TUser } from "./User/types";
import axiosApi from "./User/axiosApi";

export const loginRequest = async ({ email, password }: TUser) => {
  return axiosApi.patch("/usuario", {
    email,
    password,
  });
  
};

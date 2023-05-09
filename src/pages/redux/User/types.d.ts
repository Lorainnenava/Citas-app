import { SerializedError } from "@reduxjs/toolkit";
import { QueryStatus } from "@reduxjs/toolkit/dist/query";

export interface IUser {
  email?: string;
  password?: string;
  role?: string;
  user: IUseCheck;
  error?: SerializedError | undefined;
  status?: QueryStatus | undefined;
}
export interface IUseCheck {
  email?: string;
  _id?: string;
  _idtypeOfDocument?: string;
  identification?: number;
  mobileNumber?: number;
  name?: string;
  password?: string;
  role?: string;
}
export interface ITypeDocument {
  typeOfDocument?: string;
  _id?: string;
}

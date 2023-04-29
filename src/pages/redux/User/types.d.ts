import { SerializedError } from "@reduxjs/toolkit";
import { QueryStatus } from "@reduxjs/toolkit/dist/query";

export interface IUser {
  email?: string;
  password?: string;
  error?: SerializedError | undefined;
  status?: QueryStatus | undefined;
}

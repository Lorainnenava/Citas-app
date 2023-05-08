import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITypeDocument, IUser } from "./types";

// Define a service using a base URL and expected endpoints
export const RestApi = createApi({
  reducerPath: "RestApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8900" }),
  tagTypes: [""],
  keepUnusedDataFor: 3,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getUserChecked: builder.mutation<IUser, Partial<IUser>>({
      query: (dataForm) => ({
        url: "/usuario",
        method: "PATCH",
        body: dataForm,
      }),
    }),
    PostUserCreated: builder.mutation({
      query: (newUser) => ({
        url: "/usuario",
        method: "POST",
        body: newUser,
      }),
    }),
    getTypeDocument: builder.query<Array<ITypeDocument>, ITypeDocument>({
      query: () => ({
        url: "/documento",
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserCheckedMutation,
  usePostUserCreatedMutation,
  useGetTypeDocumentQuery,
} = RestApi;

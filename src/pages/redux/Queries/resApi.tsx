import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITypeDocument, IUser } from "./types";

// Define a service using a base URL and expected endpoints
export const RestApi = createApi({
  reducerPath: "RestApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8900" }),
  tagTypes: ["refreshDataDating", "refreshDataUpdate"],
  keepUnusedDataFor: 1,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    /**
     * Consultas Para Usuarios
     */
    getUserChecked: builder.mutation<IUser, Partial<IUser>>({
      query: (dataForm) => ({
        url: "/usuario",
        method: "PATCH",
        body: dataForm,
      }),
    }),
    //obtener usuarios
    getUsers: builder.query({
      query: (token) => ({
        url: "/usuario",
        headers: { "Content-Type": "application/json", token },
        method: "GET",
      }),
    }),
    // crear usuario
    PostUserCreated: builder.mutation({
      query: ({newUser,token}) => ({
        url: "/usuario",
        method: "POST",
        headers: { "Content-Type": "application/json", token },
        body: newUser,
      }),
    }),
    // obtener tipo de documento
    getTypeDocument: builder.query<Array<ITypeDocument>, ITypeDocument>({
      query: () => ({
        url: "/documento",
        method: "GET",
      }),
    }),
    /**
     * Consultas Para Citas
     */
    getDating: builder.query({
      query: (token) => ({
        url: "/citas",
        headers: { "Content-Type": "application/json", token },
        method: "GET",
      }),
      providesTags: ["refreshDataDating"],
    }),
    // actualizar estado de citas
    UpdateStateDating: builder.mutation({
      query: ({ _id, dataState, token }) => ({
        url: `/citas/state/${_id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json", token },
        body: dataState,
      }),
      invalidatesTags: ["refreshDataDating", "refreshDataUpdate"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserCheckedMutation,
  usePostUserCreatedMutation,
  useGetTypeDocumentQuery,
  useGetDatingQuery,
  useUpdateStateDatingMutation,
  useGetUsersQuery,
} = RestApi;

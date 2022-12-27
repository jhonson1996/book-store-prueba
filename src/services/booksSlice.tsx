import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.itbook.store/1.0",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
        query: (name)=> `/${name}`
    })
  })
});


export const { useGetBooksQuery  } = apiSlice 
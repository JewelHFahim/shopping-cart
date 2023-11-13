import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://shopping-cart-server-ebon.vercel.app" }),
  tagTypes: ["shoppin-cart"],

  endpoints: (builder) => ({


    getProducts: builder.query({
      query: () => `/products`,
      providesTags: ["shoppin-cart"],
    }),

    getSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: ["shoppin-cart"],
    }),

    postProduct: builder.mutation({
      query: (data) => ({
        url: `/product`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["shoppin-cart"],
    }),

    deleteProduct: builder.mutation({
      query(id) {
        return {
          url: `/product/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["shoppin-cart"],
    })
  }),
});

export const {
    useGetProductsQuery,
    useGetSingleProductQuery
} = apiSlice;

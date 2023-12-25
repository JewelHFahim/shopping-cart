import apiSlice from "../api/apiSlice";

const orderApi = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    getOrders: builder.query({
      query: () => `/orders`,
      providesTags: ["nature-hub"],
    }),

    orderDetails: builder.query({
      query: (id) => `/order/${id}`,
      providesTags: ["nature-hub"],
    }),

    createOrder: builder.mutation({
      query: (data) => ({
        url: `/order`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["nature-hub"],
    }),

    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["nature-hub"],
    }),


  }),


});

export const { useGetOrdersQuery, useOrderDetailsQuery, useCreateOrderMutation, useDeleteOrderMutation } = orderApi;
export default orderApi;

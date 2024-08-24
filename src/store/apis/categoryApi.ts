import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setProducts } from "../slices/productsSlice";
import { Products } from "@/types";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (build) => ({
    getProductsByCategorySlug: build.query<Products, string>({
      query: (slug) => `products/category/${slug}`,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setProducts(data.products));
      },
    }),
  }),
});

export const { useGetProductsByCategorySlugQuery } = categoryApi;

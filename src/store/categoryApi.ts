import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setProducts } from "./productsSlice";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (build) => ({
    getProductsByCategorySlug: build.query<any, string>({
      query: (slug) => `products/category/${slug}`,
      async onQueryStarted(_, { dispatch, queryFulfilled, getState }) {
        const { data } = await queryFulfilled;
        dispatch(setProducts(data.products));
      },
    }),
  }),
});

export const { useGetProductsByCategorySlugQuery } = categoryApi;

import { Category } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (build) => ({
    getCategories: build.query<Category[], void>({
      query: () => "products/categories",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;

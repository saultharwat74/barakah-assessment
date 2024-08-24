import { cartSlice } from "@/store/slices/cartSlice";
import { productsSlice } from "@/store/slices/productsSlice";

export const useAppActions = () => {
  return {
    ...cartSlice.actions,
    ...productsSlice.actions,
  };
};

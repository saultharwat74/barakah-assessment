import { useAppSelector } from "./useAppSelector";
export const useAppStore = () => {
  const cartSlice = useAppSelector((state) => state.cartSlice);
  const productSlice = useAppSelector((state) => state.productsSlice);
  return {
    cartState: cartSlice,
    productsState: productSlice,
  };
};

import CartContainer from "@/layouts/cart/CartContainer";
import Header from "@/layouts/cart/Header";
import { View } from "react-native";

export default function Cart() {
  return (
    <View className="flex-1 flex-col gap-3">
      <Header />
      <CartContainer />
    </View>
  );
}

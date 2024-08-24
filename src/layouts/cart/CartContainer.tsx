import { ScrollView, Text, View } from "react-native";
import { router } from "expo-router";
import Product from "./Product";
import { useDispatch } from "react-redux";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import { useAppStore } from "@/hooks/useAppStore";
import { useAppActions } from "@/hooks/useAppActions";
import { showMessage } from "react-native-flash-message";
import { colors } from "colors";

export default function CartContainer() {
  const {
    cartState: { cartItems, allSelected },
  } = useAppStore();
  const dispatch = useDispatch();
  const { resetCart, toggleSelectAll } = useAppActions();

  return (
    <View className="flex-1 rounded-t-3xl bg-white px-4 pt-6 gap-6">
      {!!cartItems.length ? (
        <>
          <View className="flex flex-row justify-between items-center">
            <View className="flex-row items-center gap-4">
              <Checkbox
                checked={allSelected}
                onPress={() => dispatch(toggleSelectAll())}
                className={`flex justify-center items-center h-10 w-10 bg-[${
                  allSelected ? "#97ccc3" : "#f0f0f0"
                }] rounded-2xl`}
              />
              <Text className="text-xl font-bold">Select all</Text>
            </View>
          </View>
          <View className="flex-1 flex-col">
            <ScrollView>
              {cartItems.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </ScrollView>

            <Button
              onPress={() => {
                dispatch(resetCart());
                showMessage({
                  message: "Order Placed",
                  description: "Your order has been placed successfully",
                  type: "success",
                  backgroundColor: colors.success,
                });
                router.push("/(tabs)");
              }}
              className="flex justify-center items-center bg-green h-14 rounded-xl mb-6"
              labelProps={{ label: "Checkout", className: "text-xl font-bold" }}
            />
          </View>
        </>
      ) : (
        <View className="flex justify-center items-center h-full">
          <Text className="text-xl font-semibold">Your cart is empty!</Text>
          <Text className="text-lg text-gray-600">
            Start adding items to your cart.
          </Text>
        </View>
      )}
    </View>
  );
}

import { ScrollView, Text, View } from "react-native";
import { router } from "expo-router";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store";
import { resetCart, toggleSelectAll } from "@/store/cartSlice";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";

export default function CartContainer() {
  const { products, allSelected } = useAppSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  return (
    <View className="flex-1 rounded-t-3xl bg-white px-4 pt-6 gap-6">
      {!!products.length && (
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
              {products.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </ScrollView>

            <Button
              onPress={() => {
                dispatch(resetCart());
                router.push("/(tabs)");
              }}
              className="flex justify-center items-center bg-primary h-14 rounded-xl mb-6"
              labelProps={{ label: "Checkout", className: "text-xl font-bold" }}
            />
          </View>
        </>
      )}
    </View>
  );
}

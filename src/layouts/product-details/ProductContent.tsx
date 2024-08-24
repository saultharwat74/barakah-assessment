import { router } from "expo-router";
import { Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  IconCurrencyPound,
  IconInfoCircle,
  IconStarFilled,
  IconThumbUp,
} from "@tabler/icons-react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { useAppSelector } from "@/store";
import Button from "@/components/Button";

export default function ProductContent() {
  const dispatch = useDispatch();
  const { selectedProduct } = useAppSelector((state) => state.productsSlice);
  return (
    <View className="gap-10 rounded-t-3xl flex-col justify-between bg-white px-4 py-8">
      <View className="flex flex-col gap-6">
        <Text className="text-2xl font-bold">{selectedProduct?.title}</Text>

        <View className="flex flex-row gap-2">
          <View className="flex flex-row items-center border-2 border-[#d7dbdb] rounded-lg px-4 py-2 gap-1">
            <IconStarFilled size={18} fill={"#97ccc3"} color="#97ccc3" />
            <Text className="text-lg font-bold">{selectedProduct?.rating}</Text>
            <Text className="text-base font-semibold text-[#717680]">
              {selectedProduct?.reviews.length} reviews
            </Text>
          </View>
          <View className="flex flex-row items-center border-2 border-[#d7dbdb] rounded-lg px-4 py-2 gap-1">
            <IconThumbUp fill={"#c3e600"} size={18} color="#c3e600" />
            <Text className="text-lg font-bold">
              {selectedProduct.discountPercentage}%
            </Text>
          </View>
          <View className="flex flex-row items-center border-2 border-[#d7dbdb] rounded-lg px-4 py-2 gap-1">
            <MaterialCommunityIcons
              name="comment-question"
              size={16}
              color="#84888c"
            />
            <Text className="text-lg font-bold">
              {selectedProduct.reviews.length}
            </Text>
          </View>
        </View>

        <View className="w-full h-14 bg-[#f0f0f0] rounded-xl flex-row items-center justify-between px-6">
          <View className="flex flex-row items-center gap-4">
            <View className="flex flex-row items-center">
              <IconCurrencyPound color={"#000"} size={28} />

              <Text className="text-3xl font-bold">
                {selectedProduct?.price}
              </Text>
            </View>
            <Text className="text-sm font-normal text-[#aeb3b5]">
              from 14 per month
            </Text>
          </View>
          <IconInfoCircle size={24} color={"#858b8f"} />
        </View>
        <Text className="text-lg text-[#868b8f]">
          {selectedProduct.description}{" "}
          <Text className="font-semibold text-lg text-th">Read more</Text>
        </Text>
      </View>

      <View className="w-full flex flex-col items-center gap-1">
        <Button
          labelProps={{ label: "Add to cart", className: "text-xl font-bold" }}
          onPress={() => {
            if (selectedProduct) {
              dispatch(addToCart({ ...selectedProduct, selected: true }));
              router.push("/(tabs)");
            }
          }}
          className="w-full flex justify-center items-center bg-primary h-14 rounded-xl"
        />
        <Text className="text-lg">Delivery on 26 October</Text>
      </View>
    </View>
  );
}

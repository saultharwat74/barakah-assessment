import SeeAll from "@/components/SeeAll";
import { IconCurrencyPound, IconHeart } from "@tabler/icons-react-native";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store";
import { selectProduct } from "@/store/productsSlice";
import { useEffect, useState } from "react";
import { Image } from "expo-image";

export default function Items() {
  const dispatch = useDispatch();
  const { shownProducts } = useAppSelector((state) => state.productsSlice);
  const [timeRemaining, setTimeRemaining] = useState(3 * 3600);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = `${String(Math.floor(timeRemaining / 3600)).padStart(
    2,
    "0"
  )}:${String(Math.floor((timeRemaining % 3600) / 60)).padStart(
    2,
    "0"
  )}:${String(timeRemaining % 60).padStart(2, "0")}`;

  return (
    <View className="flex flex-col">
      <View className="w-full flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-3">
          <Text className="text-2xl font-bold">Flash Sale</Text>
          <View className="flex justify-center items-center p-1 rounded-lg bg-primary">
            <Text className="text-lg font-medium">{formattedTime}</Text>
          </View>
        </View>
        <SeeAll onPress={() => {}} />
      </View>
      <View className="flex flex-row flex-wrap gap-4 mt-6">
        {shownProducts.map((category) => (
          <Pressable
            key={category.id}
            className="flex-col gap-2 mb-6"
            style={{ flexBasis: "48%" }}
            onPress={() => {
              dispatch(selectProduct(category));
              router.push("/(stacks)/product-details");
            }}
          >
            {category.images[0] && (
              <View className="bg-[#f0f0f0] flex justify-center items-center py-6 rounded-2xl relative">
                <Image
                  style={{ width: 96, height: 96 }}
                  source={{ uri: category.images[0] }}
                  contentFit="contain"
                />
                <View className="absolute right-4 top-4 flex items-center justify-center h-8 w-8 bg-white rounded-full">
                  <IconHeart size={16} color={"#8d9296"} />
                </View>
              </View>
            )}
            <Text className="text-xl font-medium">{category.title}</Text>
            <View className="flex flex-row items-center">
              <IconCurrencyPound color={"#000"} size={24} />
              <Text className="text-xl font-medium"> {category.price}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

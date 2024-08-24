import ProductContent from "@/layouts/product-details/ProductContent";
import { Pressable, TouchableOpacity, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Image } from "expo-image";
import { useAppStore } from "@/hooks/useAppStore";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  IconChevronLeft,
  IconHeart,
  IconShare2,
} from "@tabler/icons-react-native";
import { router } from "expo-router";

export default function ProductDetails() {
  const {
    productsState: { selectedProduct },
  } = useAppStore();
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 flex-col">
      <View
        style={{ paddingTop: insets.top }}
        className="px-3 w-full flex flex-row items-center justify-between"
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.back()}
          className="flex justify-center items-center h-12 w-12 bg-white rounded-full"
        >
          <IconChevronLeft color="#000" size={24} />
        </TouchableOpacity>

        <View className="flex flex-row items-center gap-4">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push("/(tabs)/favorites")}
            className="flex justify-center items-center h-12 w-12 bg-white rounded-full"
          >
            <IconHeart fill={"#ff6969"} color="#ff6969" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            className="flex justify-center items-center h-12 w-12 bg-white rounded-full"
          >
            <IconShare2 color="#000" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <AppIntroSlider
        data={selectedProduct.images}
        renderItem={({ item }) => (
          <View
            key={`${item}`}
            className="w-full h-full flex justify-center items-center"
          >
            <Image
              source={{ uri: item }}
              style={{ width: 100, height: 100 }}
              contentFit="contain"
            />
          </View>
        )}
      />
      <ProductContent />
    </View>
  );
}

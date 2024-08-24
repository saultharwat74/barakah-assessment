import ProductContent from "@/layouts/product-details/ProductContent";
import { View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useAppSelector } from "@/store";
import { Image } from "expo-image";

export default function ProductDetails() {
  const { selectedProduct } = useAppSelector((state) => state.productsSlice);
  return (
    <View className="flex-1 flex-col">
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

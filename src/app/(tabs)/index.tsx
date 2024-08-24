import Categories from "@/layouts/home/Categories";
import Products from "@/layouts/home/Products";
import Header from "@/layouts/home/Header";
import { ScrollView, Text, View } from "react-native";
import { useAppStore } from "@/hooks/useAppStore";

export default function Index() {
  const {
    productsState: { shownProducts },
  } = useAppStore();
  return (
    <View className="flex-1 flex-col bg-gray gap-3">
      <Header />
      <ScrollView className="flex-1 bg-white" contentContainerClassName="bg-white">
        <View className="flex rounded-t-3xl bg-white py-6 flex-col">
          <Categories />
          {!!shownProducts.length ? (
            <View className="flex flex-row flex-wrap gap-2 mt-6 px-4">
              <Products />
            </View>
          ) : (
            <View className="h-full flex items-center justify-center">
              <Text className="text-xl font-semibold"> Loading... </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

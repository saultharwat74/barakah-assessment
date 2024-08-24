import Categories from "@/layouts/home/Categories";
import Products from "@/layouts/home/Products";
import Header from "@/layouts/home/Header";
import { ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 flex-col bg-[#f0f0f0] gap-3">
      <Header />
      <ScrollView>
        <View className="flex rounded-t-3xl bg-white py-6 flex-col">
          <Categories />
          <View className="flex flex-row flex-wrap gap-2 mt-6 px-4">
            <Products />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

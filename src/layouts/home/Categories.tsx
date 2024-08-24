import SeeAll from "@/components/SeeAll";
import { store } from "@/store";
import { useGetCategoriesQuery } from "@/store/apis/categoriesApi";
import { useEffect } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import { categoryApi } from "@/store/apis/categoryApi";
import { useDispatch } from "react-redux";
import { Image } from "expo-image";
import { useAppStore } from "@/hooks/useAppStore";
import { useAppActions } from "@/hooks/useAppActions";
export default function Categories() {
  const dispatch = useDispatch();
  const { data: categories, isSuccess } = useGetCategoriesQuery();
  const {
    productsState: { categoriesBySlug },
  } = useAppStore();
  const { filterByCategory } = useAppActions();
  useEffect(() => {
    if (isSuccess && !!categories.length) {
      categories.forEach((category) => {
        store.dispatch(
          categoryApi.endpoints.getProductsByCategorySlug.initiate(
            category.slug
          )
        );
      });
    }
  }, [categories, isSuccess]);
  return (
    <ScrollView className="flex flex-col">
      <View className="flex flex-row items-center justify-between px-4">
        <Text className="text-2xl font-bold">Categories</Text>
        <SeeAll onPress={() => {}} />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 8,
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
        data={categories}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => (
          <View key={item.slug} className="flex flex-col items-center gap-2">
            <Pressable
              onPress={() => dispatch(filterByCategory(item.slug))}
              className="bg-gray h-20 w-20 rounded-full flex items-center justify-center"
            >
              <Image
                style={{ width: 48, height: 48 }}
                source={{ uri: categoriesBySlug[item.slug]?.[0].images[0] }}
                contentFit="contain"
              />
            </Pressable>
            <Text className="text-lg font-medium">
              {item.name.substring(0, 8)}
            </Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

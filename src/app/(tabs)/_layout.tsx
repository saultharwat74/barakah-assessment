import { useAppSelector } from "@/store";
import {
  IconHeart,
  IconHome,
  IconSearch,
  IconShoppingCart,
  IconUserCircle,
} from "@tabler/icons-react-native";
import { Tabs } from "expo-router";
import { useMemo } from "react";
import { Text, View } from "react-native";

export default function TabLayout() {
  const { products } = useAppSelector((state) => state.cartSlice);
  const quantity = useMemo(
    () => products.reduce((acc, product) => acc + product.quantity, 0),
    [products]
  );
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarStyle: { borderTopWidth: 0 } }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              className={`text-sm ${
                focused ? "text-[#000]" : "text-[#8d9296]"
              }`}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <IconHome
              size={28}
              color={focused ? "#c3e600" : "#8d9296"}
              fill={focused ? "#c3e600" : "#8d9296"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="catalog"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              className={`text-sm ${
                focused ? "text-[#000]" : "text-[#8d9296]"
              }`}
            >
              Catalog
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <IconSearch size={28} color={focused ? "#c3e600" : "#8d9296"} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              className={`text-sm ${
                focused ? "text-[#000]" : "text-[#8d9296]"
              }`}
            >
              Favorites
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <IconHeart size={28} color={focused ? "#c3e600" : "#8d9296"} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              className={`text-sm ${
                focused ? "text-[#000]" : "text-[#8d9296]"
              }`}
            >
              Cart
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View>
              <IconShoppingCart
                size={28}
                color={focused ? "#c3e600" : "#8d9296"}
                fill={focused ? "#c3e600" : "#fff"}
              />
              <View
                className={
                  "flex justify-center items-center border-2 border-[#fff] absolute top-0 right-0 w-5 h-5 bg-[#000] rounded-full"
                }
              >
                <Text className="text-xs text-white">{quantity}</Text>
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              className={`text-sm ${
                focused ? "text-[#000]" : "text-[#8d9296]"
              }`}
            >
              Profile
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <IconUserCircle size={28} color={focused ? "#c3e600" : "#8d9296"} />
          ),
        }}
      />
    </Tabs>
  );
}

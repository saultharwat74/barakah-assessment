import { RouterKey } from "@/types";
import { memo } from "react";
import { Text } from "react-native";

type TabBarLabelProps = {
  focused: boolean;
  routerKey: RouterKey;
};
function TabBarLabel({ focused, routerKey }: TabBarLabelProps) {
  const labels: Record<RouterKey, string> = {
    cart: "Cart",
    catalog: "Catalog",
    favorites: "Favorites",
    index: "Home",
    profile: "Profile",
  };
  return (
    <Text className={`text-sm ${focused ? "text-[#000]" : "text-[#8d9296]"}`}>
      {labels[routerKey]}
    </Text>
  );
}
export default memo(TabBarLabel);

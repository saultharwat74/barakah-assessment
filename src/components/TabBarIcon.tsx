import { useAppStore } from "@/hooks/useAppStore";
import { RouterKey } from "@/types";
import {
  IconHeart,
  IconHome,
  IconSearch,
  IconShoppingCart,
  IconUserCircle,
} from "@tabler/icons-react-native";
import { memo, useMemo } from "react";
import { Text, View } from "react-native";

type TabBarIconProps = {
  focused: boolean;
  routerKey: RouterKey;
};
function TabBarIcon({ focused, routerKey }: TabBarIconProps) {
  const {
    cartState: { cartItems },
  } = useAppStore();
  const quantity = useMemo(
    () => cartItems.reduce((acc, product) => acc + product.quantity, 0),
    [cartItems]
  );
  const iconRender: JSX.Element = useMemo(() => {
    const icons: Record<string, JSX.Element> = {
      catalog: <IconSearch size={28} color={focused ? "#c3e600" : "#8d9296"} />,
      favorites: (
        <IconHeart size={28} color={focused ? "#c3e600" : "#8d9296"} />
      ),
      profile: (
        <IconUserCircle size={28} color={focused ? "#c3e600" : "#8d9296"} />
      ),
      index: (
        <IconHome
          size={28}
          color={focused ? "#c3e600" : "#8d9296"}
          fill={focused ? "#c3e600" : "#8d9296"}
        />
      ),
      cart: (
        <IconShoppingCart
          size={28}
          color={focused ? "#c3e600" : "#8d9296"}
          fill={focused ? "#c3e600" : "#fff"}
        />
      ),
    };
    return icons[routerKey];
  }, [focused, routerKey]);
  return (
    <View>
      {iconRender}
      {routerKey === "cart" && (
        <View
          className={
            "flex justify-center items-center border-2 border-[#fff] absolute top-0 right-0 w-5 h-5 bg-[#000] rounded-full"
          }
        >
          <Text className="text-xs text-white">{quantity}</Text>
        </View>
      )}
    </View>
  );
}

export default memo(TabBarIcon);

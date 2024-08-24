import Checkbox from "@/components/Checkbox";
import { useAppActions } from "@/hooks/useAppActions";
import { Product as TProduct } from "@/types";
import {
  IconCurrencyPound,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react-native";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";

type ProductProps = {
  product: TProduct;
};
export default function Product({ product }: ProductProps) {
  const dispatch = useDispatch();
  const { addToCart, removeFromCart, setSelectedProduct } = useAppActions();

  return (
    <View className="flex flex-row items-center gap-6 py-4 h-44">
      <View className="flex flex-row items-center gap-4 h-32">
        <Checkbox
          onPress={() => dispatch(setSelectedProduct(product.id))}
          className={`flex justify-center items-center h-10 w-10 bg-[${
            product.selected ? "#97ccc3" : "#f0f0f0"
          }] rounded-2xl`}
          checked={product.selected}
        />
        <View className="flex items-center justify-center h-32 w-32 bg-gray rounded-2xl">
          <Image
            source={{ uri: product.images[0] }}
            style={{ width: 40, height: 40 }}
            contentFit="contain"
          />
        </View>
      </View>
      <View className="flex flex-1 flex-col justify-between h-44 py-6 border-b-slate-200 border-b-[1px]">
        <Text className="text-xl">{product.title}</Text>
        <View className="flex flex-row justify-between">
          <View className="flex flex-row items-center gap-2">
            <IconCurrencyPound size={16} color={"#000"} />
            <Text className="text-xlg font-bold">{product.price}</Text>
          </View>
          <View className="flex flex-row items-center gap-3">
            <Pressable
              onPress={() => dispatch(removeFromCart(product.id))}
              className="flex justify-center items-center h-8 w-8 bg-gray rounded-full"
            >
              <IconMinus size={16} color={"#000"} />
            </Pressable>
            <Text className="text-lg font-bold">{product.quantity}</Text>
            <Pressable
              onPress={() => dispatch(addToCart({ ...product }))}
              className="flex justify-center items-center h-8 w-8 bg-gray rounded-full"
            >
              <IconPlus size={16} color={"#000"} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

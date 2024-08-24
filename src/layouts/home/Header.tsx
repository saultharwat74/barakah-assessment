import { useAppActions } from "@/hooks/useAppActions";
import {
  IconBell,
  IconDiscount2,
  IconSearch,
} from "@tabler/icons-react-native";
import { Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

export default function Header() {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const { searchForProducts } = useAppActions();
  
  return (
    <View
      style={{ paddingTop: insets.top }}
      className={`flex py-6 px-4 bg-white rounded-b-3xl flex-col gap-6`}
    >
      <View className="flex flex-row justify-between items-center">
        <View className="flex justify-center items-center h-12 w-12 bg-green rounded-full">
          <IconDiscount2 color="#000" size={24} />
        </View>
        <View className="flex flex-col items-center gap-1">
          <Text className="text-sm color-[#868b8f]">Delivery address</Text>
          <Text className="text-base font-medium color-[#000]">
            92 High Street, London
          </Text>
        </View>
        <View className="flex justify-center items-center h-12 w-12 bg-gray rounded-full">
          <IconBell color="#000" size={24} />
          <View className="flex justify-center items-center border-2 border-[#fff] absolute top-0 right-0 w-4 h-4 bg-[#97ccc3] rounded-full" />
        </View>
      </View>

      <View className="flex flex-row justify-center items-center gap-2 bg-gray rounded-xl h-14">
        <IconSearch size={16} color="#8a9194" />
        <TextInput
          placeholder="Search the entire shop"
          className="text-base text-softGray"
          onChangeText={(text) => dispatch(searchForProducts(text))}
        />
      </View>

      <View className="flex flex-row items-center gap-1  bg-[#aed1d0] rounded-xl h-14 px-5">
        <Text className="text-black text-lg font-bold">Delivery is </Text>
        <View className="bg-white px-2 py-1 rounded-xl">
          <Text className="text-black text-base font-semibold">20%</Text>
        </View>
        <Text className="text-black text-lg font-bold"> cheaper</Text>
      </View>
    </View>
  );
}

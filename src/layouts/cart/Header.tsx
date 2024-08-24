import {
  IconChevronRight,
  IconDots,
  IconMapPin,
} from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Header() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{ paddingTop: insets.top }}
      className={`flex py-6 px-4 bg-white rounded-b-3xl flex-col gap-6`}
    >
      <View className="flex flex-row justify-between items-center">
        <Text className="text-2xl font-bold">Cart</Text>
        <View className="flex justify-center items-center h-12 w-12 bg-gray rounded-full">
          <IconDots color="#000" size={24} />
        </View>
      </View>

      <View className="flex flex-row justify-between items-center gap-2 bg-gray rounded-xl h-14 px-6">
        <View className="flex flex-row items-center gap-4">
          <IconMapPin size={16} color="#8a9194" />
          <Text className="text-xl font-semibold">92 High Street, London</Text>
        </View>
        <IconChevronRight size={24} color="#8a9194" />
      </View>
    </View>
  );
}

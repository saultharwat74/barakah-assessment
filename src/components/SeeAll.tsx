import { IconChevronRight } from "@tabler/icons-react-native";
import { Pressable, Text, View } from "react-native";

type SeeAllProps = {
  onPress: () => void;
};
export default function SeeAll({ onPress }: SeeAllProps) {
  return (
    <Pressable onPress={onPress} className="flex flex-row items-center gap-2">
      <Text className="text-lg text-[#9ca0a6]">See all</Text>
      <View className="flex justify-center items-center h-8 w-8 rounded-full bg-[#f0f0f0]">
        <IconChevronRight size={16} color={"#000"} />
      </View>
    </Pressable>
  );
}

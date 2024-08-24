import { memo } from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { TextProps } from "react-native-svg";

type ButtonProps = PressableProps & {
  labelProps: TextProps & {
    label: string;
    className?: string;
  };
};
function Button({
  onPress,
  className,
  labelProps: { label, ...labelProps },
  ...props
}: ButtonProps) {
  return (
    <Pressable {...props} onPress={onPress} className={className}>
      <Text {...labelProps}>{label}</Text>
    </Pressable>
  );
}
export default memo(Button);
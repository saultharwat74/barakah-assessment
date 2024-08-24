import { IconCheck } from "@tabler/icons-react-native";
import { ComponentProps, memo } from "react";
import { Pressable, PressableProps } from "react-native";

type CheckboxProps = PressableProps & {
  checked: boolean;
  iconProps?: ComponentProps<typeof IconCheck>;
};
function Checkbox({
  checked,
  iconProps,
  ...props
}: CheckboxProps) {
  return (
    <Pressable {...props}>
      {checked ? (
        <IconCheck
          size={iconProps?.size ?? 24}
          color={iconProps?.color ?? "#fff"}
          {...iconProps}
        />
      ) : null}
    </Pressable>
  );
}
export default memo(Checkbox)
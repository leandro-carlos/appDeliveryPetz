import { useState } from "react";
import { StyleSheet, type TextInputProps, View } from "react-native";
import MaskInput, { type Mask } from "react-native-mask-input";
import Text from "../Text";
import theme from "@/theme";

interface InputProps extends TextInputProps {
  readonly value?: string;
  readonly label?: string;
  readonly mask: Mask;
}

export default function InputWithMask({
  value,
  label,
  mask,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{ gap: 6 }}>
      <Text colorText={isFocused ? "black" : "mediumGrey"}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && { borderColor: theme.colors.black },
        ]}
      >
        <MaskInput
          value={value}
          style={styles.input}
          autoCapitalize="none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          mask={mask}
          {...rest}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: theme.borderRadius.sm,
    width: "100%",
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: "transparent",
  },
  input: {
    flex: 1,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.base,
    height: 40,
    paddingHorizontal: 8,
    borderRadius: theme.borderRadius.sm,
  },
});

import { Eye, EyeSlash } from "phosphor-react-native";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  type TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import Text from "../Text";
import theme from "@/theme";

interface InputProps extends TextInputProps {
  readonly value?: string;
  readonly label?: string;
}

export default function Input({
  value,
  label,
  secureTextEntry,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={{ gap: 6 }}>
      <Text colorText={isFocused ? "black" : "mediumGrey"}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && { borderColor: theme.colors.black },
        ]}
      >
        <TextInput
          value={value}
          style={styles.input}
          placeholder={label}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((prev) => !prev)}
            style={styles.iconContainer}
          >
            {isPasswordVisible ? (
              <Eye size={24} color={theme.colors.black} />
            ) : (
              <EyeSlash size={24} color={theme.colors.black} />
            )}
          </TouchableOpacity>
        )}
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
  },
  iconContainer: {
    padding: 8,
  },
});

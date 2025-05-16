import { type ReactNode, useMemo } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
} from "react-native";
import Text from "../Text";
import theme from "@/theme";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isTertiary?: boolean;
  isLoading?: boolean;
  readonly bgColor?: keyof typeof theme.colors;
  icon?: ReactNode;
}

const Button = ({
  title,
  isPrimary,
  isSecondary,
  isTertiary,
  isLoading,
  bgColor,
  style,
  icon,
  ...rest
}: ButtonProps) => {
  const backgroundColor = useMemo(() => {
    if (isLoading) {
      return theme.colors.black;
    }
    if (bgColor) {
      return bgColor;
    }
    if (isPrimary) {
      return theme.colors.primary;
    }
    if (isSecondary || isTertiary) {
      return "transparent";
    }
    return theme.colors.primary;
  }, [isPrimary, isSecondary, isTertiary, isLoading, bgColor]);

  const textColor = useMemo(() => {
    if (isPrimary) {
      return theme.colors.white;
    }
    if (isSecondary || isTertiary) {
      return theme.colors.black;
    }
    return theme.colors.white;
  }, [isPrimary, isSecondary, isTertiary]);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: bgColor ? theme.colors[bgColor] : backgroundColor,
          borderColor: isSecondary ? theme.colors.border : "transparent",
          borderWidth: isSecondary ? 1 : 0,
        },
        style,
      ]}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.colors.white} />
      ) : (
        <View style={styles.content}>
          {/* Se o ícone existir, renderize-o */}
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <Text
            size="medium18"
            fontFamily="semiBold"
            style={{
              color: textColor,
              textDecorationLine: isTertiary ? "underline" : "none",
            }}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.borderRadius.md,
    width: "100%",
    height: 50,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    marginRight: 8,
  },
});

export default Button;

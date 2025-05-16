import type { ReactNode } from "react";
import { Text as RNText, type TextProps, type TextStyle } from "react-native";
import type { FontFamilyProps, SizeProps } from "./props";
import theme from "@/theme";

export interface RNTextProps extends TextProps {
  readonly children?: ReactNode;
  readonly size?: keyof SizeProps;
  readonly fontFamily?: keyof FontFamilyProps;
  readonly isTitle?: boolean;
  readonly colorText?: keyof typeof theme.colors;
  readonly style?: TextStyle;
}

export default function Text({
  children,
  size = "base16",
  fontFamily = "regular",
  colorText = "black",
  isTitle = false,
  style,
  ...rest
}: RNTextProps) {
  return (
    <RNText
      {...rest}
      style={[
        {
          color: theme.colors[colorText],
          fontFamily: theme.fonts[fontFamily],
          fontSize: isTitle ? theme.fontSizes.lg : theme.fontSizes[size],
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
}

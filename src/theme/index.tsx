import { MD3LightTheme as DefaultTheme } from "react-native-paper";

const colors = {
  // Brand
  primary: "#820AD1",
  onPrimary: "#FFFFFF",
  secondary: "#FFD100",
  secondaryDark: "#C2A200",

  // Backgrounds
  background: "#FFFFFF",
  surface: "#F9F9F9",
  greyInput: "#F2F5F8",
  offWhite: "#F7F7F7",
  lightGrey: "#F2F2F2",

  // Text
  textPrimary: "#1A1A1A",
  textSecondary: "#4D4D4D",
  black: "#000000",

  // Feedback
  error: "#E53935",
  attention: "#F4A72E",
  positive: "#53A773",
  information: "#3B85E5",

  // Greyscale
  grayHeavy: "#717171",
  grayMedium: "#A6A6A6",
  grayRegular: "#DCDCDC",
  grayDark: "#4F4E59",

  // Reds & Oranges
  red: "#E5172F",
  lightRed: "#F9573B",
  lightestRed: "#FCEBEB",
  orange: "#FF4E00",

  // Others
  white: "#FFFFFF",
  border: "#D0D5DD",
  yellowRegular: "#FFBF00",
  yellowDark: "#FFAA00",
};

const fontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 24,
  xxl: 32,
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

const borderRadius = {
  sm: 4,
  md: 8,
  lg: 16,
  pill: 999,
};

const fonts = {
  light: "Font-Light",
  regular: "Font-Regular",
  bold: "Font-Bold",
};

const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
    surface: colors.surface,
    error: colors.error,
    onPrimary: colors.onPrimary,

    // Custom palette
    grayDark: colors.grayDark,
    grayHeavy: colors.grayHeavy,
    grayMedium: colors.grayMedium,
    grayRegular: colors.grayRegular,
    greyInput: colors.greyInput,
    lightGrey: colors.lightGrey,
    white: colors.white,
    offWhite: colors.offWhite,
    lightRed: colors.lightRed,
    lightestRed: colors.lightestRed,
    attention: colors.attention,
    positive: colors.positive,
    information: colors.information,
    yellowRegular: colors.yellowRegular,
    yellowDark: colors.yellowDark,
    orange: colors.orange,
    red: colors.red,
    border: colors.border,
    black: colors.black,
  },
};

const theme = {
  colors,
  fontSizes,
  spacing,
  borderRadius,
  fonts,
  paper: paperTheme,
};

export default theme;

import theme from "@/theme";
import { View } from "react-native";

export default function Border() {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: theme.colors.border,
        height: 1,
        marginBottom: 8,
      }}
    />
  );
}

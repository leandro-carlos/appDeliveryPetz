import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "@/routes/auth.navigation";
import { useFonts } from "expo-font";
import { PaperProvider } from "react-native-paper";
import theme from "@/theme";

export default function App() {
  const [loaded, error] = useFonts({
    "Font-Light": require("@/assets/fonts/CascadiaCode-Light.ttf"),
    "Font-Regular": require("@/assets/fonts/CascadiaCode-Regular.ttf"),
    "Font-SemiBold": require("@/assets/fonts/CascadiaCode-SemiBold.ttf"),
    "Font-Bold": require("@/assets/fonts/CascadiaCode-Bold.ttf"),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <PaperProvider theme={theme.paper}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </PaperProvider>
  );
}

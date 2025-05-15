import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "@/routes/auth.navigation";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded, error] = useFonts({
    "Font-Light": require("@/assets/fonts/IntroLight.otf"),
    "Font-Regular": require("@/assets/fonts/IntroRegular.otf"),
    "Font-Bold": require("@/assets/fonts/IntroBold.otf"),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

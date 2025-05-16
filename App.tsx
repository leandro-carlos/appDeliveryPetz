import { useFonts } from "expo-font";
import { PaperProvider } from "react-native-paper";
import theme from "@/theme";
import { AuthProvider } from "@/context/AuthContext";
import RootNavigation from "@/routes/root.navigation";

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
    <AuthProvider>
      <PaperProvider theme={theme.paper}>
        <RootNavigation />
      </PaperProvider>
    </AuthProvider>
  );
}

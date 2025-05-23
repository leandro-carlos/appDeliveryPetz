import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./auth.navigation";
import { Bottom } from "./bottom.navigation";
import { useAuthContext } from "@/context/AuthContext";

export default function RootNavigation() {
  const { isAuthenticated } = useAuthContext();

  return (
    <NavigationContainer>
      {isAuthenticated ? <Bottom /> : <AuthStack />}
    </NavigationContainer>
  );
}

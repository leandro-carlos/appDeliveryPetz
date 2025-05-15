import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      id={undefined}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export { AuthStack };

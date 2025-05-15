import Historic from "@/pages/Historic";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function Bottom() {
  return (
    <Tab.Navigator initialRouteName="Home" id={undefined}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Historic" component={Historic} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export { Bottom };

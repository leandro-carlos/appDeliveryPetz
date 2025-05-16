import Historic from "@/pages/Historic";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import theme from "@/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { House, List, Notepad } from "phosphor-react-native";

const Tab = createBottomTabNavigator();

function Bottom() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.grayMedium,
        tabBarStyle: { backgroundColor: theme.colors.background },
      }}
      initialRouteName="Home"
      id={undefined}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <House
              size={24}
              color={focused ? theme.colors.primary : theme.colors.grayMedium}
            />
          ),
          tabBarLabel: "Home",
          tabBarInactiveTintColor: theme.colors.grayMedium,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Notepad
              size={24}
              color={focused ? theme.colors.primary : theme.colors.grayMedium}
            />
          ),
          tabBarLabel: "Historico",
        }}
        name="Historic"
        component={Historic}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <List
              size={24}
              color={focused ? theme.colors.primary : theme.colors.grayMedium}
            />
          ),
          tabBarLabel: "Menu",
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export { Bottom };

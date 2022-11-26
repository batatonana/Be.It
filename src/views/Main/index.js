import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "./Home";
import { Payout } from "./Payout";
import { Profile } from "./Profile";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";

export const Main = ({ navigation }) => {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      inactiveColor="#A06CD5"
      activeColor="#E2CF00"
      labeled={false}
      barStyle={{ backgroundColor: "#0000000d",
        borderRadius:"100%"
    }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon5 name="wallet" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Payout"
        component={Payout}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "./Home";
import { Payout } from "./Payout";
import { Profile } from "./Profile";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import { styles } from "./styles";

export const Main = ({ navigation }) => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting = {true}
      inactiveColor="#01593D"
      activeColor="#4A448D"
      barStyle={styles.navbar}
    >
      <Tab.Screen
        name="Payout"
        component={Payout}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon5 name="wallet" size={25} color={color} />
          ),
        }}
        barStyle={{ }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={27} color={color} />
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

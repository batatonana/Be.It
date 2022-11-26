import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from "../views/Auth/Login";

export const AppNav = () => {

    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = 'Main' component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
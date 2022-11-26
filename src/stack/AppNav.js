import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from "../views/Auth/Login";

export const AppNav = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = 'main' component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
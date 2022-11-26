import { NavigationContainer } from "@react-navigation/native";
import { Login } from "../views/Auth/Login";

export const AppNav = () => {
    
    return(
        <NavigationContainer>
            <Login/>
        </NavigationContainer>
    );
};
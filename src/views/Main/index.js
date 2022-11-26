import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Home } from './Home';
import { Payout } from './Payout';
import { Profile } from './Profile';

export const Main = ({navigation}) => {
    
    const Tab = createMaterialBottomTabNavigator();

    return(
        <Tab.Navigator 
        initialRouteName = 'Home'
        inactiveColor="#A06CD5"
        activeColor="#E2CFEA"
        barStyle={{ backgroundColor: '#6247AA' }}>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Payout' component={Payout}/>
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
    );
};
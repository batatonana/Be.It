import { View, Text, Button } from "react-native";
import { styles } from "./styles";

export const Profile = ({navigation}) => {
    return(
        <View style={styles.center}>
            <Text>Profile</Text>
            <Button
            title="LOGOUT"
            onPress={() => navigation.navigate('Login')}
        />
        </View>
    );
};

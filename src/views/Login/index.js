import { View, Text, Button } from "react-native"
import { styles } from "./styles"

export const Login = ({navigation}) => {
    return(
        <View style={styles.center}>
            <Text>HELLO</Text>
            <Button
            title="LOGIN"
            onPress={() => navigation.navigate('Main')}
        />
     </View>
    )
   
}
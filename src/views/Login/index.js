
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";

export const Login = ({navigation}) => {
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
      <Button
            title="LOGIN"
            onPress={() => navigation.navigate('Main')}
        />
      </View>
    </View>
  );
};

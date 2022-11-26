import { View, Text, Button, Pressable, TextInput } from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";

export const Login = ({ navigation }) => {
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
      <Text style={styles.placeholder}>PLACEHOLDER</Text>
        <TextInput placeholder="Username" style={styles.inputBox}></TextInput>
        <TextInput placeholder="Password" style={styles.inputBox} secureTextEntry={true}></TextInput>
        <Pressable
          onPress={() => navigation.navigate("Main")}
          style={styles.buttonLogin}
        >
          <Text style = {styles.buttonLoginText}>LOGIN</Text>
        </Pressable>
        <Text style={styles.signupText}>No account? Sign Up</Text>
      </View>
    </View>
  );
};

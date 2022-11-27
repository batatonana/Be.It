import { View, Text, Pressable, TextInput, Image } from "react-native";
import { styles } from "./styles";

export const Login = ({ navigation }) => {
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <View style={styles.container4}>
          <Image
            source={require("../../../assets/Logo.png")}
            style={{ width: 70, height: 70 }}
          />
          <Text style={styles.header}>EcoEd</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputText}>Email</Text>
          <TextInput placeholder="Username" style={styles.input} />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate("Main")}
          style={({ pressed }) => [
            {
              width: "60%",
              height: "10%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 24,
              marginTop: "20%",
              marginBottom: "5%",
              backgroundColor: "#4A448D",
              shadowOffset: pressed ? { width: -2, height: 4 } : null,
              shadowColor: pressed ? "#171717" : null,
              shadowOpacity: pressed ? 0.2 : 0,
              shadowRadius: 3,
            },
            styles.wrapperCustom,
          ]}
        >
          <Text style={styles.buttonLoginText}>Login</Text>
        </Pressable>
        <View style={styles.container3}>
          <Text style={styles.signupText}>No account? </Text>
          <Text style={styles.signupText1}> Sign Up </Text>
        </View>
      </View>
    </View>
  );
};

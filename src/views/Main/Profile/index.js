import { View, Text, Button, SafeAreaView, ScrollView } from "react-native";
import { styles } from "./styles";

export const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.scrollBar}>
      <ScrollView style={styles.scrollView}>
        <Text>Profile</Text>
        <View style={styles.center}>
          <Button title="LOGOUT" onPress={() => navigation.navigate("Login")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

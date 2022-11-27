import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import Evil from "react-native-vector-icons/EvilIcons";
import Simple from "react-native-vector-icons/SimpleLineIcons";

export const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.scrollBar}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Profile</Text>
        <View style={styles.profilePic}></View>
        <Text style={styles.username}>Mia Alcatifa</Text>
        <Text style={styles.at}>@pedradesafiradokazzio</Text>
        <View style={styles.editProfile}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </View>
        <View style={styles.containerParent}>
          <View style={styles.container}>
            <Evil name="gear" size={35} />
            <Text style={styles.containerText}>Settings</Text>
            <View style={styles.containerButton}>
              <Text style={styles.containerButtonText}></Text>
            </View>
          </View>
          <View style={styles.containerSeparator}></View>
          <View style={styles.container}>
            <Evil name="question" size={35} />
            <Text style={styles.containerText}>Help Center</Text>
            <View style={styles.containerButton}>
              <Text style={styles.containerButtonText}></Text>
            </View>
          </View>
          <View style={styles.containerSeparator}></View>
          <View style={styles.container}>
            <Evil name="tag" size={35} />
            <Text style={styles.containerText}>About Us</Text>
            <View style={styles.containerButton}>
              <Text style={styles.containerButtonText}></Text>
            </View>
          </View>
          <View style={styles.containerSeparator}></View>
          <View style={styles.container}>
            <Simple name="people" size={20} />
            <Text style={styles.containerText}> Privacy & Terms</Text>
            <View style={styles.containerButton}>
              <Text style={styles.containerButtonText}></Text>
            </View>
          </View>
          <View style={styles.containerSeparator}></View>
          <View style={styles.container}>
            <Simple name="folder-alt" size={20} />
            <Text style={styles.containerText}> Documents</Text>
            <View style={styles.containerButton}>
              <Text style={styles.containerButtonText}></Text>
            </View>
          </View>
        </View>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={styles.logout}
        >
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

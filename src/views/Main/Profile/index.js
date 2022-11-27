import { View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";
import { styles } from "./styles";
import Evil from "react-native-vector-icons/EvilIcons";
import Simple from "react-native-vector-icons/SimpleLineIcons";
import Icon from "react-native-vector-icons/FontAwesome5";


export const Profile = ({ navigation }) => {
  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.scrollBar}>
          <Text style={styles.text}>Profile</Text>
          <View style={styles.profilePic}></View>
          <Text style={styles.username}>Mia Alcatifa</Text>
          <Text style={styles.at}>@pedradesafiradokazzio</Text>
          <View style={styles.editProfile}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </View>
          <View style={styles.container}>
            <Evil name="gear" size={35} color={"#6D4500"} />
            <Text style={styles.containerText}>Settings</Text>
            <View style={styles.containerButton}>
              <Icon name="chevron-right"/>
            </View>
          </View>
          <View style={styles.containerSeparator}></View>
          <View style={styles.container}>
            <Evil name="question" size={35} color={"#6D4500"} />
            <Text style={styles.containerText}>Help Center</Text>
            <View style={styles.containerButton}>
            <Icon name="chevron-right"/>
            </View>
          </View>
          <View style={styles.containerSeparator}></View>
          <View style={styles.container}>
            <Evil name="tag" size={35} color={"#6D4500"} />
            <Text style={styles.containerText}>About Us</Text>
            <View style={styles.containerButton}>
            <Icon name="chevron-right"/>
            </View>
          </View>
          <View style={styles.containerSeparator}></View>
          <View style={styles.container}>
            <Simple name="people" size={25} color={"#6D4500"}/>
            <Text style={styles.containerText}> Privacy & Terms</Text>
            <View style={styles.containerButton}>
            <Icon name="chevron-right"/>
            </View>
          </View>
          <View style={styles.containerSeparator}></View>
          <View style={styles.container}>
            <Simple name="folder-alt" size={25} color={"#6D4500"} />
            <Text style={styles.containerText}> Documents</Text>
            <View style={styles.containerButton}>
            <Icon name="chevron-right"/>
            </View>
          </View>
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={styles.logout}
          >
            <Text style={styles.logoutText}>Log Out</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

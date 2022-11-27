import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./styles";

export const Payout = () => {
  return (
    <View style={styles.center}>
      <View style={styles.container}>
        <Text style={styles.text}>50.00</Text>
        <Image
            source={require("../../../../assets/Logo.png")}
            style={{ width: 70, height: 70 }}
          />
      </View>
      <Image style={{ width: "100%", height: 500 }} source={require("../../../../assets/teamplate.png")}/>
      <Pressable
        style={({ pressed }) => [
          {
            width: "60%",
            height: "8%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 36,
            backgroundColor: "#4A448D",
            shadowOffset: pressed ? { width: -2, height: 4 } : null,
            shadowColor: pressed ? "#171717" : null,
            shadowOpacity: pressed ? 0.2 : 0,
            shadowRadius: 3,
            position:"absolute",
            bottom:"5%"
          },
          styles.wrapperCustom,
        ]}>
        <Text style={styles.buttonText}>Claim reward</Text>
      </Pressable>
    </View>
  );
};

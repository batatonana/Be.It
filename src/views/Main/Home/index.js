import { View, Text } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const Home = () => {
  const variable = "50.00";

  return (
    <View style={styles.center}>
      <View style={styles.moneyCard}>
        <Text style={styles.moneyText}>{variable}$</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.container2}>
            <Text style={styles.dailyText}>Daily Challenge</Text>
            <Icon name="timer-outline" size={30} color={"#000000"}/>
        </View>
        <View style={styles.bar}/>
      </View>
      <View style={styles.card}>
        <View style={styles.card1}>
          <Text style={styles.text}>Walk a mile</Text>
          <Text style={styles.completed}>Completed</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.card1}>
          <Text style={styles.text}>Take your reusable bottle</Text>
          <Text style={styles.inProgress}>In progress</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.card1}>
          <Text style={styles.text}>Quizz</Text>
          <Text style={styles.inProgress}>In progress</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.card1}>
          <Text style={styles.text}>Desafio Supresa</Text>
          <Text style={styles.inProgress}>In progress</Text>
        </View>
      </View>
    </View>
  );
};

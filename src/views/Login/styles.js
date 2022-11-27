import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container1: {
    backgroundColor: "#275309",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    backgroundColor: "#E9E6D4",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25%",
    height: "60%",
    width: "80%",
  },
  placeholder: {
    backgroundColor: "#275309",
    color: "white",
    width: 100,
    height: 50,
    marginBottom: "30%",
  },
  inputBox: {
    backgroundColor: "white",
    justifyContent: "center",
    width: 250,
    height: 30,
    marginBottom: "5%",
    borderColor: "#894303",
    borderWidth: "1px",
    paddingLeft: "2.5%",
    borderRadius: "5%",
  },
  buttonLogin: {
    backgroundColor: "#894303",
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10%",
    marginTop: "30%",
  },
  buttonLoginText: {
    color: "white",
  },
  signupText: {
    marginTop: "5%",
    color: "#275309",
    textDecorationLine: "underline",
  },
  header:{
    marginVertical:"2.5%",
    left: 30,
    alignSelf:"flex-start",
  }
});

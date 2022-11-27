import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container1: {
    backgroundColor: "#01593D",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25%",
    height: "60%",
    width: "92%",
  },
  container3: {
    display:"flex",
    flexDirection:"row"
  },

  inputBox: {
    backgroundColor: "white",
    justifyContent: "center",
    width: "80%",
    height: "17%",
    marginTop: "7%",
  },
  input: {
    flex:1,
    backgroundColor: "white",
    justifyContent: "center",
    width: "100%",
    marginTop: "5%",
    borderColor: "#894303",
    borderWidth: "1px",
    paddingLeft: "2.5%",
    borderRadius: 8,
  },
  buttonLogin: {  
    backgroundColor: "#4A448D",
    width: "60%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    marginTop: "20%",
    marginBottom: "5%"
  },
  buttonLoginText: {
    color:"#ffffff",
  },
  signupText1:{
    color:"#4A448D"
  }
  
});

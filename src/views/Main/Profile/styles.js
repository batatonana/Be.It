import React, { cloneElement } from "react";
import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  
  scrollView:{
  },

  scrollBar: {
    paddingTop: StatusBar.currentHeight,
    overflow: "hidden",
  },
  text: {
    marginVertical:"10%",
    alignSelf: "center",
    fontSize: 32,
  },
  profilePic: {
    marginBottom:"10%",
    alignSelf: "center",
    width:124,
    height:124,
    backgroundColor:"#01593D",
    borderRadius: "100%",
  },
  username:{
    fontSize: 24,
    alignSelf: "center",
  },
  at:{
    fontSize: 16,
    alignSelf:"center",
    marginBottom:"10%"
  },
  editProfile:{
    marginBottom:"10%",
    alignSelf:"center",
    width:169,
    height:43,
    backgroundColor:"#4A448D",
    borderRadius: "10%",
    alignItems:"center",
    justifyContent:"center",
  },
  editProfileText:{
    color: "white",
    fontSize: 20,
  },
  container:{
    display:"flex",
    flexDirection: "row",
    marginVertical:10,
    maxWidth: "80%",
  },
  containerIcon:{

  },
  containerText:{
    fontSize: 20,
    paddingHorizontal:"5%",
  },
  containerButton:{
    width:27,
    height:27,
    borderRadius:"100%",
    backgroundColor:"#02b67d",
  },
  containerButtonText:{

  },
  containerSeparator:{
    width: "80%",
    height: 3,
    backgroundColor: "black",
    borderRadius: "10%",
  },
  containerParent:{
    display: "flex",
    alignItems:"center",
  },
  logout:{
    marginVertical:"10%",
    width:139,
    height:43,
    alignSelf:"center",
    backgroundColor: "#6D4500",
    borderRadius:"10%",
    alignItems:"center",
    justifyContent:"center",
  },
  logoutText:{
    fontSize:23,
    color:"white",
  }


});

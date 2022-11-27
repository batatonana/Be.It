import React, { cloneElement } from "react";
import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({

  scrollBar: {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  text: {
    marginVertical:"10%",
    fontSize: 32,
  },
  profilePic: {
    marginBottom:"10%",
    width:124,
    height:124,
    backgroundColor:"#01593D",
    borderRadius: "100%",
  },
  username:{
    fontSize: 24,
  },
  at:{
    fontSize: 16,
    marginBottom:"10%"
  },
  editProfile:{
    marginBottom:"10%",
    width:169,
    height:43,
    backgroundColor:"#4A448D",
    borderRadius: "10%",
    alignItems:"center",
    justifyContent:"center",
  },
  editProfileText:{
    color: "white",
    fontSize:16,
    fontWeight: "600",
  },
  container:{
    display:"flex",
    flexDirection: "row",
    alignItems:"flex-start",
    justifyContent:"flex-start",
    marginVertical:10,
    maxWidth: "80%",
  },
  containerText:{
    fontSize: 20,
    paddingHorizontal:"5%",
  },
  containerButton:{
    width:27,
    height:27,
    borderRadius:"100%",
    backgroundColor:"#01593D80",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  containerSeparator:{
    width: "80%",
    height:3,
    backgroundColor: "#01593D",
    borderRadius: "10%",
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
    fontSize:16,
    fontWeight: "600",
    color:"white",
  }


});

import React from "react";
import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  scrollView: {
    display: "flex",
    alignContent: "center",
  },
  scrollBar: {
    paddingTop: StatusBar.currentHeight,
    overflow: "hidden",
  },
});

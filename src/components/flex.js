import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flexDirection: "row", height: "100%" }}>
      <View style={{ flex: 1, width: "20%", backgroundColor: "rebeccapurple" }} />
      <View style={{ flex: 2, width: "20%", backgroundColor: "crimson", alignSelf: "flex-end" }} />
      <View style={{ flex: 3, width: "80%", backgroundColor: "gold" }} />
    </View>
  );
}

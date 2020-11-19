import React, { useState } from "react";
import { Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  const [count, setCount] = useState(1);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Welcome to my awesome app!
      </Text>
      <Button title="Go to Game" onPress={() => navigation.navigate("Game", { count })} />
    </View>
  );
}

import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";

export default function HomeScreen({ navigation, route }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (route.params && route.params.count) {
      setCount(route.params.count);
    }
  }, [route.params]);

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

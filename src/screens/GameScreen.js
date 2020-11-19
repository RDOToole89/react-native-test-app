import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert, Share, TouchableWithoutFeedback } from "react-native";
import { DeviceMotion } from "expo-sensors";

export default function GameScreen() {
  const [paused, setPaused] = useState(false);
  const [color, setColor] = useState("white");

  const share = async (color) => {
    try {
      const result = await Share.share({
        message: `Check out this wonderful color: ${color}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("shared with activity type of", result.activityType);
        } else {
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissed");
      }
    } catch (error) {
      Alert.alert(error.message);
      console.log("failed sharing:", error);
    }
  };

  useEffect(() => {
    DeviceMotion.setUpdateInterval(250);
    const subscription = DeviceMotion.addListener((data) => {
      // from 0 to 360 (the color wheel)
      const hue = Math.max(0, Math.round(150 + 150 * data.rotation.beta) % 360);

      // from 0% to 100% (from gray/black to fully saturated color)
      const saturation = Math.max(0, Math.round(30 + 60 * data.rotation.beta) % 100);
      if (!paused) {
        setColor(`hsl(${hue}, ${saturation}%, 50%)`);
      }
    });

    // cleanup on unmount
    return () => subscription.remove();
  }, [setColor, paused]);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: color,
      }}
    >
      <Text style={{ marginBottom: 20, fontSize: 24, fontWeight: "bold" }}>Choose your color!</Text>
      <View style={{ marginBottom: 20 }}>
        <Button
          title={paused ? "Restart" : "Pause"}
          onPress={() => {
            setPaused(!paused);
          }}
        />
      </View>
      <Button
        title="Share this color!"
        onPress={() => {
          share(color);
        }}
      />
    </View>
  );
}

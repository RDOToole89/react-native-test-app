import React from "react";

function AboutScreen() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
        }}
      >
        This is an awesome game I developed using React Native, React Navigation and my phones
        accelerometer!
      </Text>
    </View>
  );
}

export default AboutScreen;

import React, { useRef, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  Alert,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {
  const randomNum = useRef(Math.random()).current;

  const [text, setText] = useState("");

  function MyHeader() {
    return; /* stuff at the top */
  }

  function MyFooter() {
    return; /* stuff at the top */
  }

  return (
    <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
      <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>Hello React Native</Text>
      <ActivityIndicator size="large" color="#c1262c" style={{ marginBottom: 30 }} />
      <TextInput
        style={{ borderBottomColor: "#000000", borderBottomWidth: 1, margin: 30 }}
        onChangeText={(text) => setText(text)}
        value={text}
      />
      {/* {[0, 1, 2, 3, 4].map((i) => {
        return (
          <TouchableOpacity onPress={() => Alert.alert(`You Pressed Picture ${i}`)}>
            <Image
              key={i}
              source={{
                uri: `https://picsum.photos/500/300?random=${randomNum + i}`,
              }}
              style={{ width: "100%", height: 160, marginBottom: 30 }}
            />
          </TouchableOpacity>
        );
      })} */}

      <Flatlist
        ListHeaderComponent={MyHeader}
        data={[0, 1, 2, 3, 4]}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => Alert.alert(`You pressed image #${item + 1}`)}>
              <Image
                source={{ uri: `https://picsum.photos/500/300?random=${randomNum + item}` }}
                style={{ width: "100%", height: 160, marginBottom: 30 }}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => String(item)}
        ListFooterComponent={MyFooter}
      />
      <View
        style={{
          borderWidth: 2,
          borderColor: "black",
          padding: 20,
          marginBottom: 30,
        }}
      >
        <Text>Hello again!</Text>
        <Button onPress={() => Alert.alert(text)} title="Learn More" color="#c1262c" />
      </View>
    </View>
  );
}

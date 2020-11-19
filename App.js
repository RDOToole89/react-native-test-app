import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GameScreen from "./src/screens/GameScreen";
import HomeScreen from "./src/components/HomeScreen";
import Flex from "./src/components/flex";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Welcome!" }} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Flex" component={Flex} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  SafeAreaView
} from "react-native";

import { Button as AppButton } from "./components/Button";
import { FadeInView } from "./components/FadeInView";
// import { AppContainer } from "./components/Route";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

interface Props {}

export const App: React.SFC<Props> = React.memo(() => {
  const [Count, setCount] = useState(0);

  return (
    <>
      {/* <AppContainer /> */}

      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.containerScrollView}>
          <FadeInView>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>
              To get started, edit App.tsx
            </Text>
            <Text style={styles.instructions}>{instructions}</Text>
            <Text style={styles.instructions}>{instructions}</Text>
            <Text style={styles.instructions}>{instructions}</Text>
            <Text style={styles.instructions}>{instructions}</Text>
            <Text style={styles.instructions}>{Count}</Text>
          </FadeInView>

          <Button title="Cộng" onPress={() => setCount(Count + 1)} />
          <Button title="Trừ" onPress={() => setCount(Count - 1)} />
          <Button title="Nhân 2" onPress={() => setCount(Count * 2)} />
          <Button title="Chia 2" onPress={() => setCount(Count / 2)} />
          <AppButton />
          <AppButton primary />
        </ScrollView>
      </SafeAreaView>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  containerScrollView: {
    justifyContent: "center",
    alignItems: "center"
  },

  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

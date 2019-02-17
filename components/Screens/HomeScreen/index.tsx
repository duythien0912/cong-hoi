import React, { useState } from "react";
import { NavigationScreenProp } from "react-navigation";
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  SafeAreaView
} from "react-native";
import { FadeInView } from "../../FadeInView";
import { Button as AppButton } from "../../Button";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

const HomeScreen: React.SFC<HomeScreenProps> = React.memo(props => {
  const [Count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerScrollView}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => props.navigation.navigate("Details")}
        />
        <FadeInView>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.tsx</Text>
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
  );
});

export { HomeScreen };
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

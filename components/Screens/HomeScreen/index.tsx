import React from "react";
import { View, Text, Button } from "react-native";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.SFC<HomeScreenProps> = React.memo(props => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate("Details")}
      />
    </View>
  );
});

export { HomeScreen };

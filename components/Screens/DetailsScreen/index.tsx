import React from "react";
import { View, Text, Button } from "react-native";

interface DetailsScreenProps {
  navigation: any;
}

const DetailsScreen: React.SFC<DetailsScreenProps> = React.memo(props => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => props.navigation.navigate("Details")}
      />
    </View>
  );
});

export { DetailsScreen };

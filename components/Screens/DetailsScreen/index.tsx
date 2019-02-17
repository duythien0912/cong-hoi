import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

interface DetailsScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

const DetailsScreen: React.SFC<DetailsScreenProps> = React.memo(props => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Return to Home..."
        onPress={() => props.navigation.navigate("Home")}
      />
      <MyButton />
      <CustomTextButton />
    </View>
  );
});

const MyButton = () => (
  <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => null}>
    Login with Facebook
  </Icon.Button>
);

const CustomTextButton = () => (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{ fontFamily: "Arial", fontSize: 15 }}>
      Login with Facebook
    </Text>
  </Icon.Button>
);

export { DetailsScreen };

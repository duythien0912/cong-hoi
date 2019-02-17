import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
// import { HomeIconWithBadge } from "./HomeIconWithBadge";

export const getTabBarIcon = (
  navigation: any,
  focused: any,
  tintColor: any
) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName: string = "";
  if (routeName === "Home") {
    // iconName = `ios-home${focused ? "" : "-outline"}`;
    iconName = `ios-home`;
    // We want to add badges to home tab icon
    // IconComponent = HomeIconWithBadge;
  } else if (routeName === "Details") {
    // iconName = `ios-settings${focused ? "" : "-outline"}`;
    iconName = `ios-settings`;
  } else if (routeName === "Home1") {
    // iconName = `ios-home${focused ? "" : "-outline"}`;
    iconName = `ios-heart`;
  } else if (routeName === "Home2") {
    // iconName = `ios-home${focused ? "" : "-outline"}`;
    iconName = `ios-rocket`;
  }
  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

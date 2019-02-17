import {
  createBottomTabNavigator,
  createAppContainer,
  TabBarBottom
} from "react-navigation"; // Version can be specified in package.json

import { HomeScreen } from "../Screens/HomeScreen";
import { DetailsScreen } from "../Screens/DetailsScreen";
import { getTabBarIcon } from "./getTabBarIcon";
import LoginScreen from "../Screens/LoginScreen";
import MapScreen from "../Screens/MapScreen";

const RootStack = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Home1: HomeScreen,
    Home2: HomeScreen,
    Details: DetailsScreen,
    User: LoginScreen,
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),

    initialRouteName: "Home",
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    tabBarOptions: {
      // activeTintColor: "tomato",
      // inactiveTintColor: "gray",
      showLabel: false, // hide labels
      activeTintColor: "#F8F8F8", // active icon color
      inactiveTintColor: "#586589", // inactive icon color
      style: {
        backgroundColor: "#171F33" // TabBar background
      }
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);

export const AppContainer = createAppContainer(RootStack);

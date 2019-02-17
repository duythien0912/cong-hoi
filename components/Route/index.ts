import {
  createBottomTabNavigator,
  createAppContainer,
  TabBarBottom
} from "react-navigation"; // Version can be specified in package.json
import { HomeScreen } from "../Screens/HomeScreen";
import { DetailsScreen } from "../Screens/DetailsScreen";

const RootStack = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home",
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);

export const AppContainer = createAppContainer(RootStack);

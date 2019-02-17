import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json
import { HomeScreen } from "../Screens/HomeScreen";
import { DetailsScreen } from "../Screens/DetailsScreen";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

export const AppContainer = createAppContainer(RootStack);

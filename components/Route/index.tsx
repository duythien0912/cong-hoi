import {
  createBottomTabNavigator,
  createAppContainer,
  TabBarBottom
} from "react-navigation"; // Version can be specified in package.json

import { HomeScreen } from "../Screens/HomeScreen";
import { DetailsScreen } from "../Screens/DetailsScreen";
import { getTabBarIcon } from "./getTabBarIcon";

const RootStack = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Home1: HomeScreen,
    Home2: HomeScreen,
    Details: DetailsScreen
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
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);

export const AppContainer = createAppContainer(RootStack);

/*
import {
  createBottomTabNavigator,
  createAppContainer,
  TabBarBottom
} from "react-navigation"; // Version can be specified in package.json
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { Text, View } from 'react-native';

import { HomeScreen } from "../Screens/HomeScreen";
import { DetailsScreen } from "../Screens/DetailsScreen";


class IconWithBadge extends React.Component {
    render() {
      const { name, badgeCount, color, size } = this.props;
      return (
        <View style={{ width: 24, height: 24, margin: 5 }}>
          <Ionicons name={name} size={size} color={color} />
          {badgeCount > 0 && (
            <View
              style={{
                // /If you're using react-native < 0.57 overflow outside of the parent
                // will not work on Android, see https://git.io/fhLJ8
                position: 'absolute',
                right: -6,
                top: -3,
                backgroundColor: 'red',
                borderRadius: 6,
                width: 12,
                height: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                {badgeCount}
              </Text>
            </View>
          )}
        </View>
      );
    }
  }  

const HomeIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
    return <IconWithBadge {...props} badgeCount={3} />;
  };
  

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Icon;
    let iconName;
    if (routeName === 'Home') {
      iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      // We want to add badges to home tab icon
      IconComponent = HomeIconWithBadge;
    } else if (routeName === 'Settings') {
      iconName = `ios-options${focused ? '' : '-outline'}`;
    }
  
    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
  };
  

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
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
    animationEnabled: false,
    swipeEnabled: false
  }
);

export const AppContainer = createAppContainer(RootStack);

*/

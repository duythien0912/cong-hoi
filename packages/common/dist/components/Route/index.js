"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation"); // Version can be specified in package.json
var HomeScreen_1 = require("../Screens/HomeScreen");
var DetailsScreen_1 = require("../Screens/DetailsScreen");
var getTabBarIcon_1 = require("./getTabBarIcon");
var LoginScreen_1 = __importDefault(require("../Screens/LoginScreen"));
var MapScreen_1 = __importDefault(require("../Screens/MapScreen"));
var RootStack = react_navigation_1.createBottomTabNavigator({
    Home: HomeScreen_1.HomeScreen,
    Home1: HomeScreen_1.HomeScreen,
    Home2: HomeScreen_1.HomeScreen,
    Details: DetailsScreen_1.DetailsScreen,
    User: LoginScreen_1.default,
    Map: MapScreen_1.default
}, {
    defaultNavigationOptions: function (_a) {
        var navigation = _a.navigation;
        return ({
            tabBarIcon: function (_a) {
                var focused = _a.focused, tintColor = _a.tintColor;
                return getTabBarIcon_1.getTabBarIcon(navigation, focused, tintColor);
            }
        });
    },
    initialRouteName: "Home",
    tabBarComponent: react_navigation_1.TabBarBottom,
    tabBarPosition: "bottom",
    tabBarOptions: {
        // activeTintColor: "tomato",
        // inactiveTintColor: "gray",
        showLabel: false,
        activeTintColor: "#F8F8F8",
        inactiveTintColor: "#586589",
        style: {
            backgroundColor: "#171F33" // TabBar background
        }
    },
    animationEnabled: false,
    swipeEnabled: false
});
exports.AppContainer = react_navigation_1.createAppContainer(RootStack);

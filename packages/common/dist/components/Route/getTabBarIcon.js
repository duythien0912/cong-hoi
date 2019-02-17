"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Ionicons_1 = __importDefault(require("react-native-vector-icons/Ionicons"));
var react_1 = __importDefault(require("react"));
// import { HomeIconWithBadge } from "./HomeIconWithBadge";
exports.getTabBarIcon = function (navigation, focused, tintColor) {
    var routeName = navigation.state.routeName;
    var IconComponent = Ionicons_1.default;
    var iconName = "";
    if (routeName === "Home") {
        // iconName = `ios-home${focused ? "" : "-outline"}`;
        iconName = "ios-home";
        // We want to add badges to home tab icon
        // IconComponent = HomeIconWithBadge;
    }
    else if (routeName === "Details") {
        // iconName = `ios-settings${focused ? "" : "-outline"}`;
        iconName = "ios-settings";
    }
    else if (routeName === "Home1") {
        // iconName = `ios-home${focused ? "" : "-outline"}`;
        iconName = "ios-heart";
    }
    else if (routeName === "Home2") {
        // iconName = `ios-home${focused ? "" : "-outline"}`;
        iconName = "ios-rocket";
    }
    else if (routeName === "User") {
        // iconName = `ios-home${focused ? "" : "-outline"}`;
        iconName = "logo-instagram";
    }
    else if (routeName === "Map") {
        iconName = "md-map";
    }
    // You can return any component that you like here!
    return react_1.default.createElement(IconComponent, { name: iconName, size: 25, color: tintColor });
};

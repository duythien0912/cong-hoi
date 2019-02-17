"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Ionicons_1 = __importDefault(require("react-native-vector-icons/Ionicons"));
var DetailsScreen = react_1.default.memo(function (props) {
    return (react_1.default.createElement(react_native_1.View, { style: { flex: 1, alignItems: "center", justifyContent: "center" } },
        react_1.default.createElement(react_native_1.Text, null, "Details Screen"),
        react_1.default.createElement(react_native_1.Button, { title: "Return to Home...", onPress: function () { return props.navigation.navigate("Home"); } }),
        react_1.default.createElement(MyButton, null),
        react_1.default.createElement(CustomTextButton, null)));
});
exports.DetailsScreen = DetailsScreen;
var MyButton = function () { return (react_1.default.createElement(Ionicons_1.default.Button, { name: "logo-facebook", backgroundColor: "#3b5998", size: 25, onPress: function () { return null; } }, "Login with Facebook")); };
var CustomTextButton = function () { return (react_1.default.createElement(Ionicons_1.default.Button, { name: "logo-facebook", backgroundColor: "#3b5998" },
    react_1.default.createElement(react_native_1.Text, { style: { fontFamily: "Arial", fontSize: 15, color: "#fff" } }, "Login with Facebook"))); };

"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var FadeInView_1 = require("../../FadeInView");
var Button_1 = require("../../Button");
var instructions = react_native_1.Platform.select({
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
    android: "Double tap R on your keyboard to reload,\n" +
        "Shake or press menu button for dev menu"
});
var HomeScreen = react_1.default.memo(function (props) {
    var _a = react_1.useState(0), Count = _a[0], setCount = _a[1];
    return (react_1.default.createElement(react_native_1.SafeAreaView, { style: styles.container },
        react_1.default.createElement(react_native_1.ScrollView, { contentContainerStyle: styles.containerScrollView },
            react_1.default.createElement(react_native_1.Text, null, "Home Screen"),
            react_1.default.createElement(react_native_1.Button, { title: "Go to Details", onPress: function () { return props.navigation.navigate("Details"); } }),
            react_1.default.createElement(FadeInView_1.FadeInView, null,
                react_1.default.createElement(react_native_1.Text, { style: styles.welcome }, "Welcome to React Native!"),
                react_1.default.createElement(react_native_1.Text, { style: styles.instructions }, "To get started, edit App.tsx"),
                react_1.default.createElement(react_native_1.Text, { style: styles.instructions }, instructions),
                react_1.default.createElement(react_native_1.Text, { style: styles.instructions }, instructions),
                react_1.default.createElement(react_native_1.Text, { style: styles.instructions }, instructions),
                react_1.default.createElement(react_native_1.Text, { style: styles.instructions }, instructions),
                react_1.default.createElement(react_native_1.Text, { style: styles.instructions }, Count)),
            react_1.default.createElement(react_native_1.Button, { title: "C\u1ED9ng", onPress: function () { return setCount(Count + 1); } }),
            react_1.default.createElement(react_native_1.Button, { title: "Tr\u1EEB", onPress: function () { return setCount(Count - 1); } }),
            react_1.default.createElement(react_native_1.Button, { title: "Nh\u00E2n 2", onPress: function () { return setCount(Count * 2); } }),
            react_1.default.createElement(react_native_1.Button, { title: "Chia 2", onPress: function () { return setCount(Count / 2); } }),
            react_1.default.createElement(Button_1.Button, null),
            react_1.default.createElement(Button_1.Button, { primary: true }))));
});
exports.HomeScreen = HomeScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    containerScrollView: {
        justifyContent: "center",
        alignItems: "center"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});

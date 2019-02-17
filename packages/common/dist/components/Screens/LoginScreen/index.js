"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_instagram_login_1 = __importDefault(require("react-native-instagram-login"));
var react_native_cookie_1 = __importDefault(require("react-native-cookie"));
var Ionicons_1 = __importDefault(require("react-native-vector-icons/Ionicons"));
var react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
var LoginScreen = function (props) {
    var _a = react_1.useState(null), token = _a[0], settoken = _a[1];
    var _b = react_1.useState(false), failure = _b[0], setfailure = _b[1];
    var inputIns = react_1.useRef(null);
    var logoutIns = function () {
        react_native_1.Alert.alert("Logout Success", "", [{ text: "OK" }], {
            cancelable: false
        });
        react_native_cookie_1.default.clear().then(function () {
            settoken(null);
        });
    };
    return (react_1.default.createElement(react_native_1.View, { style: { flex: 1, justifyContent: "center", alignItems: "center" } },
        !token ? (
        //   <TouchableOpacity
        //     style={{
        //       borderRadius: 5,
        //       backgroundColor: "orange",
        //       height: 30,
        //       width: 100,
        //       justifyContent: "center",
        //       alignItems: "center"
        //     }}
        //     onPress={() => inputIns.current.show()}
        //   >
        //     <Text style={{ color: "white" }}>Login</Text>
        //   </TouchableOpacity>
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Ionicons_1.default.Button, { name: "logo-instagram", backgroundColor: "#bd3381", size: 25, onPress: function () {
                    var inputInsRef = inputIns;
                    inputInsRef.current.show();
                } }, "Login with Instagram"),
            react_1.default.createElement(react_native_linear_gradient_1.default, { start: { x: 0.0, y: 0.25 }, end: { x: 0.5, y: 1.0 }, locations: [0.5, 1], colors: ["#bd3381", "#ee583f"], style: styles.linearGradient },
                react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Sign in with Instagram")))) : (react_1.default.createElement(react_native_1.View, { style: { flex: 1, justifyContent: "center", alignItems: "center" } },
            react_1.default.createElement(react_native_1.Text, { style: { margin: 10 } },
                "token: ",
                token),
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: {
                    borderRadius: 5,
                    backgroundColor: "green",
                    height: 30,
                    width: 100,
                    justifyContent: "center",
                    alignItems: "center"
                }, onPress: function () { return logoutIns(); } },
                react_1.default.createElement(react_native_1.Text, { style: { color: "white" } }, "Logout")))),
        failure && (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, { style: { margin: 10 } },
                "failure: ",
                JSON.stringify(failure)))),
        react_1.default.createElement(react_native_instagram_login_1.default, { ref: inputIns, clientId: "2ce51499b0ff47dfba68019863d2ee0f", redirectUrl: "https://key46.com", scopes: ["public_content+follower_list"], onLoginSuccess: function (token) { return settoken(token); }, onLoginFailure: function (data) { return setfailure(data); }, wrapperStyle: {
                borderWidth: 0
            }, containerStyle: {
                paddingVertical: 50,
                backgroundColor: "#fff"
            } })));
};
var styles = react_native_1.StyleSheet.create({
    linearGradient: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
    },
    buttonText: {
        fontWeight: "bold",
        backgroundColor: "transparent",
        textAlign: "center",
        color: "#ffffff"
    }
});
exports.default = LoginScreen;

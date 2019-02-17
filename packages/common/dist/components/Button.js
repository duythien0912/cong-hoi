"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var ButtonStyle_1 = require("./ButtonStyle");
exports.Button = React.memo(function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Submit" : _b, _c = _a.primary, primary = _c === void 0 ? false : _c, _d = _a.loading, loading = _d === void 0 ? false : _d, _e = _a.onPress, onPress = _e === void 0 ? function () { return null; } : _e, otherProps = __rest(_a, ["title", "primary", "loading", "onPress"]);
    return (React.createElement(react_native_1.TouchableOpacity, __assign({ onPress: onPress, style: [
            ButtonStyle_1.ButtonStyle.btnClass,
            primary ? ButtonStyle_1.ButtonStyle.btnBtnpriClass : null
        ] }, otherProps),
        React.createElement(react_native_1.Text, { style: [
                ButtonStyle_1.ButtonStyle.BText,
                primary ? ButtonStyle_1.ButtonStyle.BtextPri : null,
                loading ? { lineHeight: 45 } : null
            ] }, loading ? (React.createElement(react_native_1.ActivityIndicator, { color: primary ? "#fff" : "#555" })) : (title))));
});
exports.Button.defaultProps = {
    title: "Submit",
    primary: false,
    loading: false,
    onPress: function () { return null; }
};

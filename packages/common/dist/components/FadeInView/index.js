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
var FadeInView = react_1.default.memo(function (props) {
    var _a = react_1.useState(new react_native_1.Animated.Value(0)), fadeAnim = _a[0], setfadeAnim = _a[1];
    react_1.useEffect(function () {
        react_native_1.Animated.timing(
        // Animate over time
        fadeAnim, // The animated value to drive
        {
            toValue: 1,
            duration: 400 // Make it take a while
        }).start(); // Starts the animation
    });
    return (react_1.default.createElement(react_native_1.Animated.View // Special animatable View
    , { style: __assign({}, props.style, { opacity: fadeAnim // Bind opacity to animated value
         }) }, props.children));
});
exports.FadeInView = FadeInView;

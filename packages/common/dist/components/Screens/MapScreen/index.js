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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var lottie_react_native_1 = __importDefault(require("lottie-react-native"));
var react_native_maps_1 = __importDefault(require("react-native-maps"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    displayNone: {
        display: "none"
    },
    map: __assign({}, react_native_1.StyleSheet.absoluteFillObject)
});
var IApp = function (props) {
    var _a = react_1.useState(false), IsLoadMap = _a[0], setIsLoadMap = _a[1];
    react_1.useEffect(function () {
        setTimeout(function () {
            setIsLoadMap(true);
        }, 3000);
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(lottie_react_native_1.default
        // progress={progress}
        , { 
            // progress={progress}
            loop: true, ref: function (animation) { return (animation ? animation.play() : null); }, style: IsLoadMap ? styles.displayNone : {}, source: require("../../Animation/location.json") }),
        react_1.default.createElement(react_native_maps_1.default
        //  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        , { 
            //  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style: IsLoadMap ? styles.map : styles.displayNone, region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
            } })));
};
exports.default = IApp;

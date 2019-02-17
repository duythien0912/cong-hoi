"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Ionicons_1 = __importDefault(require("react-native-vector-icons/Ionicons"));
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var IconWithBadge = function (_a) {
    var name = _a.name, badgeCount = _a.badgeCount, color = _a.color, size = _a.size;
    return (react_1.default.createElement(react_native_1.View, { style: { width: 24, height: 24, margin: 5 } },
        react_1.default.createElement(Ionicons_1.default, { name: name, size: size, color: color }),
        badgeCount > 0 && (react_1.default.createElement(react_native_1.View, { style: {
                // /If you're using react-native < 0.57 overflow outside of the parent
                // will not work on Android, see https://git.io/fhLJ8
                position: "absolute",
                right: -6,
                top: -3,
                backgroundColor: "red",
                borderRadius: 6,
                width: 12,
                height: 12,
                justifyContent: "center",
                alignItems: "center"
            } },
            react_1.default.createElement(react_native_1.Text, { style: { color: "white", fontSize: 10, fontWeight: "bold" } }, badgeCount)))));
};
exports.IconWithBadge = IconWithBadge;

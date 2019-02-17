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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var IconWithBadge_1 = require("./IconWithBadge");
var HomeIconWithBadge = function (props) {
    // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
    return react_1.default.createElement(IconWithBadge_1.IconWithBadge, __assign({}, props, { badgeCount: 3 }));
};
exports.HomeIconWithBadge = HomeIconWithBadge;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AuroraProvider_1 = require("./AuroraProvider");
var NotificationStore_1 = require("./Notification/NotificationStore");
var ThemeStore_1 = require("./Theme/ThemeStore");
exports.Aurora = function (props) {
    var initialTheme = {
        colorTheme: props.colorTheme ? props.colorTheme : {},
        fontTheme: props.fontTheme ? props.fontTheme : {}
    };
    return (react_1.default.createElement(ThemeStore_1.ThemeStore.Provider, { initialState: initialTheme },
        react_1.default.createElement(NotificationStore_1.NotificationStore.Provider, null,
            react_1.default.createElement(AuroraProvider_1.AuroraProvider, null, props.children))));
};
//# sourceMappingURL=Aurora.js.map
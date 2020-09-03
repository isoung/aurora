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
var emotion_theming_1 = require("emotion-theming");
var react_1 = __importDefault(require("react"));
var Theme_1 = require("./Theme");
var ThemeProvider = function (props) {
    return (react_1.default.createElement(emotion_theming_1.ThemeProvider, { theme: function (ancestor) {
            return (__assign(__assign({}, Theme_1.DefaultTheme), { themeComponents: Theme_1.generateTheme(Theme_1.DefaultThemeComponents) }));
        } }, props.children));
};
exports.ThemeProvider = ThemeProvider;
ThemeProvider.displayName = 'ThemeProvider';
//# sourceMappingURL=ThemeProvider.js.map
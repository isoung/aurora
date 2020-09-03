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
var color_1 = __importDefault(require("color"));
var emotion_theming_1 = require("emotion-theming");
exports.generateTheme = function (theme) {
    var generatedThemeComponents = {};
    var anyDefaultThemeComponents = exports.DefaultThemeComponents;
    var anyTheme = theme;
    Object.keys(exports.DefaultThemeComponents).forEach(function (value) {
        if (typeof anyDefaultThemeComponents[value] === 'string') {
            generatedThemeComponents[value] =
                anyTheme[value] ? anyTheme[value] : anyDefaultThemeComponents[value];
        }
        else {
            generatedThemeComponents[value] = __assign(__assign({}, anyDefaultThemeComponents[value]), anyTheme[value]);
        }
    });
    return generatedThemeComponents;
};
exports.DefaultColorTheme = {
    primary: '#1C2541',
    secondary: '#F6AD55',
    danger: '#F45B69',
    success: '#48BB78',
    warning: '#ECC94B',
    link: '#3182ce',
    light: '#EEF0EB',
    dark: '#b9babe',
    white: '#FFFFFF',
    black: '#363636'
};
exports.DefaultThemeComponents = {};
exports.DefaultTheme = {
    colors: exports.DefaultColorTheme,
    fonts: {
        sm: '12px',
        base: '15px',
        md: '20px',
        lg: '32px',
        xl: '40px'
    },
    components: exports.generateTheme(exports.DefaultThemeComponents)
};
exports.getHoveredColor = function (color) {
    return color_1.default(color).isDark() ? exports.DefaultTheme.colors.white : exports.DefaultTheme.colors.black;
};
exports.useTheme = function () { return emotion_theming_1.useTheme(); };
//# sourceMappingURL=Theme.js.map
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var emotion_1 = require("emotion");
var react_1 = __importDefault(require("react"));
var ResponsiveStyles_1 = require("../ResponsiveStyles");
var ThemeStore_1 = require("../Theme/ThemeStore");
exports.Menu = function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    var menuStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n\n    ", ";\n  "], ["\n    background-color: ", ";\n\n    ", ";\n  "])), colorTheme[props.variant].base(), ResponsiveStyles_1.getPropStyle(props, { width: props.width, height: props.height }));
    return (react_1.default.createElement("div", { className: emotion_1.cx(menuStyles, props.styles) }, props.children));
};
exports.Menu.defaultProps = {
    variant: 'primary',
    width: '240px',
    height: '100%'
};
var templateObject_1;
//# sourceMappingURL=Menu.js.map
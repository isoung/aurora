"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __importDefault(require("color"));
var emotion_1 = require("emotion");
var framer_motion_1 = require("framer-motion");
var react_1 = __importDefault(require("react"));
var unstated_next_1 = require("unstated-next");
var Utils_1 = require("../Theme/Color/Utils");
var ThemeStore_1 = require("../Theme/ThemeStore");
var Button = function (props) {
    var themeStore = unstated_next_1.useContainer(ThemeStore_1.ThemeStore);
    var colorTheme = themeStore.getColorTheme();
    var variant = props.variant, styles = props.styles, rounded = props.rounded, buttonProps = __rest(props, ["variant", "styles", "rounded"]);
    var buttonStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: pointer;\n    background-color: ", ";\n    color: ", ";\n    border: transparent;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    padding-left: 16px;\n    padding-right: 16px;\n    border-radius: ", ";\n    outline: none;\n    transition:\n      background-color 100ms ease-in-out;\n\n    &:hover:not(:disabled) {\n      background-color: ", ";\n    }\n\n    &:focus:not(:disabled) {\n      background-color: ", ";\n    }\n\n    &:active:not(:disabled) {\n      background-color: ", ";\n    }\n\n    &:disabled {\n      background-color: ", ";\n      cursor: not-allowed;\n    }\n  "], ["\n    cursor: pointer;\n    background-color: ", ";\n    color: ", ";\n    border: transparent;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    padding-left: 16px;\n    padding-right: 16px;\n    border-radius: ", ";\n    outline: none;\n    transition:\n      background-color 100ms ease-in-out;\n\n    &:hover:not(:disabled) {\n      background-color: ", ";\n    }\n\n    &:focus:not(:disabled) {\n      background-color: ", ";\n    }\n\n    &:active:not(:disabled) {\n      background-color: ", ";\n    }\n\n    &:disabled {\n      background-color: ", ";\n      cursor: not-allowed;\n    }\n  "])), colorTheme[variant].base(), Utils_1.getFontColorByBackground(variant, colorTheme), rounded ? '100px' : '4px', color_1.default(colorTheme[variant].base()).mix(color_1.default(colorTheme.white.base()), .2).toString(), color_1.default(colorTheme[variant].base()).mix(color_1.default(colorTheme.white.base()), .2).toString(), color_1.default(colorTheme[variant].base()).mix(color_1.default(colorTheme.black.base()), .1).toString(), color_1.default(colorTheme[variant].base()).fade(.6).toString());
    return (react_1.default.createElement(framer_motion_1.motion.button, __assign({}, buttonProps, { whileTap: props.disabled ? null : { scale: .95 }, className: emotion_1.cx(buttonStyles, styles) }), props.children));
};
exports.Button = Button;
Button.defaultProps = {
    variant: 'primary'
};
var templateObject_1;
//# sourceMappingURL=Button.js.map
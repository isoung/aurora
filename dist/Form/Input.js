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
var react_1 = __importDefault(require("react"));
var ThemeStore_1 = require("../Theme/ThemeStore");
var Input = function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    var variant = props.variant, styles = props.styles, hasIconLeft = props.hasIconLeft, hasIconRight = props.hasIconRight, hasAddonRight = props.hasAddonRight, inputProps = __rest(props, ["variant", "styles", "hasIconLeft", "hasIconRight", "hasAddonRight"]);
    var inputStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    color: ", ";\n    border: 1px solid transparent;\n    border-bottom-left-radius: 4px;\n    border-top-left-radius: 4px;\n    border-bottom-right-radius: ", ";\n    border-top-right-radius: ", ";\n    outline: none;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    padding-left: ", ";\n    padding-right: ", ";\n    font-size: 16px;\n    transition:\n      border-color 50ms ease-in-out,\n      box-shadow 100ms ease-in-out;\n\n    &::placeholder {\n      color: ", ";\n    }\n\n    &:focus {\n      border-color: ", ";\n      box-shadow:\n        0 0.313rem 0.719rem ", ", 0 0.156rem 0.125rem rgba(0,0,0,.06);\n    }\n\n    &:focus + span i {\n      color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    color: ", ";\n    border: 1px solid transparent;\n    border-bottom-left-radius: 4px;\n    border-top-left-radius: 4px;\n    border-bottom-right-radius: ", ";\n    border-top-right-radius: ", ";\n    outline: none;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    padding-left: ", ";\n    padding-right: ", ";\n    font-size: 16px;\n    transition:\n      border-color 50ms ease-in-out,\n      box-shadow 100ms ease-in-out;\n\n    &::placeholder {\n      color: ", ";\n    }\n\n    &:focus {\n      border-color: ", ";\n      box-shadow:\n        0 0.313rem 0.719rem ", ", 0 0.156rem 0.125rem rgba(0,0,0,.06);\n    }\n\n    &:focus + span i {\n      color: ", ";\n    }\n  "])), colorTheme.light.base(), colorTheme.black.base(), hasAddonRight ? '0px' : '4px', hasAddonRight ? '0px' : '4px', hasIconLeft ? '2.5rem' : '12px', hasIconRight ? '2.5rem' : '12px', colorTheme.dark.base(), colorTheme[variant].base(), color_1.default(colorTheme[variant].base()).fade(.85).toString(), colorTheme.black.base());
    return (react_1.default.createElement("input", __assign({}, inputProps, { className: emotion_1.cx(inputStyles, styles) })));
};
exports.Input = Input;
Input.defaultProps = {
    variant: 'primary'
};
var templateObject_1;
//# sourceMappingURL=Input.js.map
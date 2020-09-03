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
var __1 = require("..");
var onButtonHover = function (colorString, lighten, darken) {
    if (lighten === void 0) { lighten = .1; }
    if (darken === void 0) { darken = .2; }
    var color = color_1.default(colorString);
    return color.isDark() ? color.darken(darken).toString() : color.lighten(lighten).toString();
};
var Button = function (props) {
    var colors = __1.useTheme().colors;
    var styles = props.styles, rounded = props.rounded, ghost = props.ghost, variant = props.variant, componentProps = __rest(props, ["styles", "rounded", "ghost", "variant"]);
    var buttonStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    color: ", ";\n    cursor: ", ";\n    padding: 12px 20px;\n    border-radius: ", ";\n    border: 2px solid ", ";\n    outline: none;\n    transition: background-color 150ms;\n\n    &:focus:not(:active) {\n      box-shadow: 0 0 0 0.2em ", ";\n    }\n\n    &:disabled {\n      opacity: .8;\n    }\n\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n\n    i:first-child:not(:last-child) {\n      margin-right: 1em;\n    }\n\n    i:last-child:not(:first-child) {\n      margin-left: 1em;\n    }\n\n    i:only-child {\n      margin-left: .5rem;\n      margin-right: .5rem;\n    }\n  "], ["\n    background-color: ", ";\n    color: ", ";\n    cursor: ", ";\n    padding: 12px 20px;\n    border-radius: ", ";\n    border: 2px solid ", ";\n    outline: none;\n    transition: background-color 150ms;\n\n    &:focus:not(:active) {\n      box-shadow: 0 0 0 0.2em ", ";\n    }\n\n    &:disabled {\n      opacity: .8;\n    }\n\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n\n    i:first-child:not(:last-child) {\n      margin-right: 1em;\n    }\n\n    i:last-child:not(:first-child) {\n      margin-left: 1em;\n    }\n\n    i:only-child {\n      margin-left: .5rem;\n      margin-right: .5rem;\n    }\n  "])), ghost ? colors['white'] : colors[variant], ghost ? colors['black'] : __1.getHoveredColor(colors[variant]), props.disabled ? 'not-allowed' : 'pointer', rounded ? '100px' : '8px', ghost ? colors[variant] : 'transparent', colors['light'], onButtonHover(colors[variant]), __1.getHoveredColor(colors[variant]));
    return (react_1.default.createElement(__1.Component, __assign({ styles: emotion_1.cx(buttonStyles, styles) }, componentProps, { element: function (p) {
            return react_1.default.createElement(framer_motion_1.motion.button, __assign({ whileTap: { scale: props.disabled ? 1 : .95 } }, p), props.children);
        } })));
};
exports.Button = Button;
Button.displayName = 'Button';
Button.defaultProps = {
    variant: 'primary'
};
var templateObject_1;
//# sourceMappingURL=Button.js.map
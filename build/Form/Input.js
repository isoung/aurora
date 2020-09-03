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
var __1 = require("..");
var getInputBoxShadow = function (color, colorVariants) {
    switch (color) {
        case 'light':
        case 'white':
            return "0 0 0 0.2em " + color_1.default(colorVariants.dark).lighten(.2).toString() + ";";
        default:
            return "0 0 0 0.2em " + color_1.default(colorVariants[color]).lighten(.2).toString() + ";";
    }
};
var Input = react_1.default.forwardRef(function (props, ref) {
    var colors = __1.useTheme().colors;
    var fonts = __1.useTheme().fonts;
    var hasIconRight = props.hasIconRight, hasIconLeft = props.hasIconLeft, styles = props.styles, variant = props.variant, rounded = props.rounded, inputProps = __rest(props, ["hasIconRight", "hasIconLeft", "styles", "variant", "rounded"]);
    var inputStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    padding-top: 12px;\n    padding-bottom: 12px;\n    padding-left: ", ";\n    padding-right: ", ";\n    border: none;\n    background-color: ", ";\n    border-radius: ", ";\n    outline: none;\n    box-sizing: border-box;\n    -webkit-transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);\n    width: ", ";\n    height: ", ";\n\n    &::placeholder {\n      font-size: ", ";\n      color: ", ";\n    }\n\n    &:hover {\n      background-color: ", ";\n      box-shadow: ", ";\n      color: ", ";\n\n      &::placeholder {\n        color: #757575;\n      }\n    }\n\n    &:focus {\n      background-color: ", ";\n      box-shadow: ", ";\n      color: ", ";\n\n      &::placeholder {\n        color: #757575;\n      }\n    }\n  "], ["\n    color: ", ";\n    padding-top: 12px;\n    padding-bottom: 12px;\n    padding-left: ", ";\n    padding-right: ", ";\n    border: none;\n    background-color: ", ";\n    border-radius: ", ";\n    outline: none;\n    box-sizing: border-box;\n    -webkit-transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);\n    width: ", ";\n    height: ", ";\n\n    &::placeholder {\n      font-size: ", ";\n      color: ", ";\n    }\n\n    &:hover {\n      background-color: ", ";\n      box-shadow: ", ";\n      color: ", ";\n\n      &::placeholder {\n        color: #757575;\n      }\n    }\n\n    &:focus {\n      background-color: ", ";\n      box-shadow: ", ";\n      color: ", ";\n\n      &::placeholder {\n        color: #757575;\n      }\n    }\n  "])), props.variant === 'light' || props.variant === 'white' ? 'black' : colors.white, props.hasIconLeft ? '3em' : '1.25em', props.hasIconRight ? '3rem' : '1.25em', colors[props.variant], rounded ? '1000px' : '8px', props.width, props.height, fonts.sm, props.variant === 'light' || props.variant === 'white' ? '#757575' : colors.white, colors.white, getInputBoxShadow(props.variant, colors), colors.black, colors.white, getInputBoxShadow(props.variant, colors), colors.black);
    return (react_1.default.createElement("input", __assign({ className: emotion_1.cx(inputStyles, styles) }, inputProps, { ref: ref })));
});
exports.Input = Input;
Input.defaultProps = {
    variant: 'light'
};
Input.displayName = 'Input';
var templateObject_1;
//# sourceMappingURL=Input.js.map
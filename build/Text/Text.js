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
var emotion_1 = require("emotion");
var emotion_theming_1 = require("emotion-theming");
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var Text = function (props) {
    var theme = emotion_theming_1.useTheme();
    var colors = theme.colors;
    var fonts = theme.fonts;
    var textAlign = props.textAlign, variant = props.variant, textProps = __rest(props, ["textAlign", "variant"]);
    var textStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    text-align: ", ";\n    margin: ", ";\n    padding: ", ";\n    height: ", ";\n    width: ", ";\n  "], ["\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    text-align: ", ";\n    margin: ", ";\n    padding: ", ";\n    height: ", ";\n    width: ", ";\n  "])), fonts[props.size], props.weight, props.default ? null : colors[props.variant], props.textAlign, props.margin, props.padding, props.height, props.width);
    return (react_1.default.createElement(__1.Component, __assign({ tag: props.tag }, textProps, { styles: emotion_1.cx(textStyles, props.styles) }), props.children));
};
exports.Text = Text;
Text.defaultProps = {
    variant: 'black',
    default: false,
    size: 'base',
    tag: 'span',
    weight: 400
};
var templateObject_1;
//# sourceMappingURL=Text.js.map
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var emotion_1 = require("emotion");
var react_1 = __importDefault(require("react"));
var ThemeStore_1 = require("../Theme/ThemeStore");
var Text = function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    var fontTheme = themeStore.getFontTheme();
    var textStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n  "], ["\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n  "])), fontTheme[props.size], props.weight, colorTheme[props.variant].base());
    return react_1.default.createElement(props.tag, __assign(__assign({}, props), { className: emotion_1.cx(textStyles, props.styles) }), props.children);
};
exports.Text = Text;
Text.defaultProps = {
    variant: 'black',
    size: 'normal',
    tag: 'span',
    weight: 400
};
var templateObject_1;
//# sourceMappingURL=Text.js.map
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
var framer_motion_1 = require("framer-motion");
var react_1 = __importDefault(require("react"));
var ThemeStore_1 = require("../Theme/ThemeStore");
var ProgressBar = react_1.default.memo(function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    var progressBarStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 1rem;\n    background-color: ", ";\n    border-radius: ", ";\n  "], ["\n    height: 1rem;\n    background-color: ", ";\n    border-radius: ", ";\n  "])), colorTheme.light.base(), props.rounded ? '100px' : undefined);
    var innerProgressBarStyles = emotion_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: ", ";\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n    height: 100%;\n    width: ", "%;\n  "], ["\n    background-color: ", ";\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n    height: 100%;\n    width: ", "%;\n  "])), colorTheme[props.variant].base(), props.rounded ? '100px' : undefined, props.rounded ? '100px' : undefined, props.value.toString());
    var variants = {
        hidden: {
            width: 0
        },
        visible: {
            width: props.value.toString() + "%"
        }
    };
    return (react_1.default.createElement("div", { className: emotion_1.cx(progressBarStyles, props.styles) }, props.animated ?
        react_1.default.createElement(framer_motion_1.motion.div, { className: innerProgressBarStyles, initial: 'hidden', animate: 'visible', variants: variants }) :
        react_1.default.createElement("div", { className: innerProgressBarStyles })));
});
exports.ProgressBar = ProgressBar;
ProgressBar.defaultProps = {
    variant: 'primary',
    rounded: false,
    animated: false
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=ProgressBar.js.map
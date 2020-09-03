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
var __1 = require("..");
var Tag = function (props) {
    var colors = __1.useTheme().colors;
    var fonts = __1.useTheme().fonts;
    var tagStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    /* font-weight: 300; */\n    font-size: ", ";\n    color: ", ";\n    display: inline-flex;\n    align-items: center;\n    border-radius: 8px;\n    padding-left: 8px;\n    padding-right: 8px;\n    height: 24px;\n  "], ["\n    background-color: ", ";\n    /* font-weight: 300; */\n    font-size: ", ";\n    color: ", ";\n    display: inline-flex;\n    align-items: center;\n    border-radius: 8px;\n    padding-left: 8px;\n    padding-right: 8px;\n    height: 24px;\n  "])), colors[props.variant], fonts.sm, __1.getHoveredColor(colors[props.variant]));
    return (react_1.default.createElement(__1.Component, __assign({ tag: 'span', styles: tagStyles }, props), props.text));
};
exports.Tag = Tag;
Tag.displayName = 'Tag';
Tag.defaultProps = {
    variant: 'primary'
};
var templateObject_1;
//# sourceMappingURL=Tag.js.map
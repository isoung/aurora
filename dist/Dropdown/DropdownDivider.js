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
var ThemeStore_1 = require("../Theme/ThemeStore");
var DropdownDivider = function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    var dropdownDividerStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-bottom: 1px solid ", ";\n    padding-top: 4px;\n    margin-bottom: 4px;\n  "], ["\n    border-bottom: 1px solid ", ";\n    padding-top: 4px;\n    margin-bottom: 4px;\n  "])), colorTheme.light.base());
    return react_1.default.createElement("div", { className: emotion_1.cx(dropdownDividerStyles, props.styles) });
};
exports.DropdownDivider = DropdownDivider;
var templateObject_1;
//# sourceMappingURL=DropdownDivider.js.map
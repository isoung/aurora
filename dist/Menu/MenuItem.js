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
exports.MenuItem = function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    var menuItemStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    cursor: ", ";\n    padding: 6px 0 6px 32px;\n\n    &:hover {\n      background-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    cursor: ", ";\n    padding: 6px 0 6px 32px;\n\n    &:hover {\n      background-color: ", ";\n    }\n  "])), props.selected ? colorTheme[props.variant].lighter() : colorTheme[props.variant].base(), props.isInteractable ? 'pointer' : undefined, props.isInteractable ? colorTheme[props.variant].lighter() : colorTheme[props.variant].base());
    var menuItemOnClick = function () {
        if (!props.onSelected) {
            props.onSelected();
        }
    };
    return (react_1.default.createElement("div", { className: emotion_1.cx(menuItemStyles, props.styles), onClick: menuItemOnClick }, props.children));
};
exports.MenuItem.defaultProps = {
    selected: false,
    variant: 'primary',
    isInteractable: true
};
var templateObject_1;
//# sourceMappingURL=MenuItem.js.map
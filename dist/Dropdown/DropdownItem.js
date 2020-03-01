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
var Container_1 = require("../Layout/Container/Container");
var ThemeStore_1 = require("../Theme/ThemeStore");
var DropdownItem = function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    var dropdownItemStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    padding: .5em 2rem .5rem 2rem;\n\n    &:not(:hover) {\n      * {\n        color: ", ";\n      }\n    }\n\n    &:hover {\n      background-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    padding: .5em 2rem .5rem 2rem;\n\n    &:not(:hover) {\n      * {\n        color: ", ";\n      }\n    }\n\n    &:hover {\n      background-color: ", ";\n    }\n  "])), props.selected === true ? colorTheme.primary.base() : colorTheme.white.base(), props.selected ? colorTheme.white.base() : null, props.hoverable === true ? colorTheme.light.base() : null);
    var dropdownItemOnClick = function () {
        if (props.onSelection) {
            props.onSelection();
        }
    };
    return (react_1.default.createElement(Container_1.Container, { styles: emotion_1.cx(dropdownItemStyles, props.styles), onClick: dropdownItemOnClick }, props.children));
};
exports.DropdownItem = DropdownItem;
DropdownItem.defaultProps = {
    selected: false,
    hoverable: false
};
var templateObject_1;
//# sourceMappingURL=DropdownItem.js.map
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
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var DropdownItem = function (props) {
    var theme = __1.useTheme();
    var colors = theme.colors;
    var styles = props.styles, selected = props.selected, onSelection = props.onSelection, hoverable = props.hoverable, containerProps = __rest(props, ["styles", "selected", "onSelection", "hoverable"]);
    var dropdownItemStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    padding: ", ";\n    margin: ", ";\n    height: ", ";\n    width: ", ";\n    cursor: ", ";\n    box-sizing: border-box;\n\n    &:not(:hover) {\n      * {\n        color: ", ";\n      }\n    }\n\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n\n      * {\n        color: ", ";\n      }\n    }\n  "], ["\n    background-color: ", ";\n    padding: ", ";\n    margin: ", ";\n    height: ", ";\n    width: ", ";\n    cursor: ", ";\n    box-sizing: border-box;\n\n    &:not(:hover) {\n      * {\n        color: ", ";\n      }\n    }\n\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n\n      * {\n        color: ", ";\n      }\n    }\n  "])), selected === true ? colors[props.variant] : colors.white, props.padding, props.margin, props.height, props.width, hoverable ? 'pointer' : 'auto', selected ? colors.white : null, hoverable ? colors[props.variant] : null, hoverable ? __1.getHoveredColor(colors[props.variant]) : __1.getHoveredColor(colors.white), __1.getHoveredColor(colors[props.variant]));
    var dropdownItemOnClick = function () {
        if (onSelection) {
            onSelection();
        }
    };
    return (react_1.default.createElement(__1.Container, __assign({}, containerProps, { styles: emotion_1.cx(dropdownItemStyles, styles), onClick: dropdownItemOnClick }), props.children));
};
exports.DropdownItem = DropdownItem;
DropdownItem.defaultProps = {
    selected: false,
    hoverable: false,
    padding: '4px 24px',
    height: '32px',
    variant: 'light'
};
var templateObject_1;
//# sourceMappingURL=DropdownItem.js.map
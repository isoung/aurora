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
var classnames_1 = __importDefault(require("classnames"));
var emotion_1 = require("emotion");
var react_1 = __importDefault(require("react"));
var ThemeStore_1 = require("../Theme/ThemeStore");
exports.Icon = function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    var variant = props.variant, styles = props.styles, isInteractable = props.isInteractable, onInteraction = props.onInteraction, interactableVariant = props.interactableVariant, icon = props.icon, size = props.size, iconProps = __rest(props, ["variant", "styles", "isInteractable", "onInteraction", "interactableVariant", "icon", "size"]);
    var iconStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    cursor: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n  "], ["\n    color: ", ";\n    cursor: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n  "])), colorTheme[variant].base(), isInteractable ? 'pointer' : 'auto', isInteractable ? colorTheme[interactableVariant].base() : colorTheme[variant].base());
    var iconSize = props.size === undefined ? '' : "fa-" + props.size;
    var iconClassname = iconSize + " " + props.icon;
    return (react_1.default.createElement("i", __assign({}, iconProps, { onClick: onInteraction, className: classnames_1.default(iconClassname, emotion_1.cx(iconStyles, styles)) })));
};
exports.Icon.defaultProps = {
    variant: 'primary',
    isInteractable: false,
    interactableVariant: 'secondary'
};
var templateObject_1;
//# sourceMappingURL=Icon.js.map
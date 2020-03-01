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
var Button_1 = require("../Button/Button");
var Icon_1 = require("../Icon/Icon");
var Utils_1 = require("../Theme/Color/Utils");
var ThemeStore_1 = require("../Theme/ThemeStore");
var getCompositeDeleteButtonColors = function (variant, colorTheme) {
    return color_1.default(colorTheme[variant].base()).isLight() ? 'black' : 'white';
};
var Tag = function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    var variant = props.variant, styles = props.styles, isInteractable = props.isInteractable, onInteraction = props.onInteraction, isDeletable = props.isDeletable, onDelete = props.onDelete, tagProps = __rest(props, ["variant", "styles", "isInteractable", "onInteraction", "isDeletable", "onDelete"]);
    var tagStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: ", ";\n    background-color: ", ";\n    color: ", ";\n    border-top-right-radius: ", ";\n    border-bottom-right-radius: ", ";\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    padding-left: 6px;\n    padding-right: 6px;\n    font-weight: 300;\n    font-size: 10px;\n  "], ["\n    cursor: ", ";\n    background-color: ", ";\n    color: ", ";\n    border-top-right-radius: ", ";\n    border-bottom-right-radius: ", ";\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    padding-left: 6px;\n    padding-right: 6px;\n    font-weight: 300;\n    font-size: 10px;\n  "])), isInteractable ? 'pointer' : 'auto', colorTheme[variant].base(), Utils_1.getFontColorByBackground(variant, colorTheme), isDeletable ? '0px' : '4px', isDeletable ? '0px' : '4px');
    var tagDeleteButtonStyles = emotion_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    padding-left: 6px;\n    padding-right: 6px;\n  "], ["\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    padding-left: 6px;\n    padding-right: 6px;\n  "])));
    return (react_1.default.createElement("div", { style: { display: 'flex' } },
        react_1.default.createElement("span", __assign({}, tagProps, { onClick: onInteraction, className: emotion_1.cx(tagStyles, styles) }), props.children),
        isDeletable ? react_1.default.createElement(Button_1.Button, { styles: tagDeleteButtonStyles, onClick: onDelete, variant: variant },
            react_1.default.createElement(Icon_1.Icon, { icon: 'fas fa-times', variant: getCompositeDeleteButtonColors(variant, colorTheme), styles: emotion_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["cursor: pointer;"], ["cursor: pointer;"]))) })) : null));
};
exports.Tag = Tag;
Tag.defaultProps = {
    variant: 'secondary'
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Tag.js.map
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
var Component = function (props) {
    var element = props.element, tag = props.tag, display = props.display, justifyContent = props.justifyContent, flexFlow = props.flexFlow, alignItems = props.alignItems, boxShadow = props.boxShadow, height = props.height, minHeight = props.minHeight, maxHeight = props.maxHeight, width = props.width, minWidth = props.minWidth, maxWidth = props.maxWidth, margin = props.margin, marginLeft = props.marginLeft, marginTop = props.marginTop, marginRight = props.marginRight, marginBottom = props.marginBottom, padding = props.padding, paddingLeft = props.paddingLeft, paddingTop = props.paddingTop, paddingRight = props.paddingRight, paddingBottom = props.paddingBottom, baseComponentProps = __rest(props, ["element", "tag", "display", "justifyContent", "flexFlow", "alignItems", "boxShadow", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "margin", "marginLeft", "marginTop", "marginRight", "marginBottom", "padding", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom"]);
    var baseStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: ", ";\n    justify-content: ", ";\n    flex-flow: ", ";\n    align-items: ", ";\n    ", ";\n    height: ", ";\n    min-height: ", ";\n    max-height: ", ";\n    width: ", ";\n    min-width: ", ";\n    max-width: ", ";\n    margin: ", ";\n    margin-left: ", ";\n    margin-top: ", ";\n    margin-right: ", ";\n    margin-bottom: ", ";\n    padding: ", ";\n    padding-left: ", ";\n    padding-top: ", ";\n    padding-right: ", ";\n    padding-bottom: ", ";\n  "], ["\n    display: ", ";\n    justify-content: ", ";\n    flex-flow: ", ";\n    align-items: ", ";\n    ", ";\n    height: ", ";\n    min-height: ", ";\n    max-height: ", ";\n    width: ", ";\n    min-width: ", ";\n    max-width: ", ";\n    margin: ", ";\n    margin-left: ", ";\n    margin-top: ", ";\n    margin-right: ", ";\n    margin-bottom: ", ";\n    padding: ", ";\n    padding-left: ", ";\n    padding-top: ", ";\n    padding-right: ", ";\n    padding-bottom: ", ";\n  "])), display, justifyContent, flexFlow, alignItems, __1.GenerateBoxShadows(boxShadow), height, minHeight, maxHeight, width, minWidth, maxWidth, margin, marginLeft, marginTop, marginRight, marginBottom, padding, paddingLeft, paddingTop, paddingRight, paddingBottom);
    return react_1.default.createElement(element ? element : tag, __assign(__assign({}, baseComponentProps), { className: emotion_1.cx(baseStyles, props.styles), onClick: props.onClick }));
};
exports.Component = Component;
Component.displayName = 'Component';
Component.defaultProps = {
    tag: 'div'
};
var templateObject_1;
//# sourceMappingURL=Component.js.map
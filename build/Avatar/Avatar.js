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
var Avatar = function (props) {
    var styles = props.styles, imgUrl = props.imgUrl, rounded = props.rounded, interactable = props.interactable, onInteraction = props.onInteraction, avatarProps = __rest(props, ["styles", "imgUrl", "rounded", "interactable", "onInteraction"]);
    var avatarStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-radius: ", ";\n    cursor: ", ";\n  "], ["\n    border-radius: ", ";\n    cursor: ", ";\n  "])), rounded ? '1000px' : '4px', interactable ? 'pointer' : 'auto');
    return (react_1.default.createElement("img", __assign({}, avatarProps, { onClick: onInteraction, className: emotion_1.cx(avatarStyles, styles), src: imgUrl })));
};
exports.Avatar = Avatar;
Avatar.defaultProps = {
    rounded: true,
    height: '40px',
    width: '40px'
};
var templateObject_1;
//# sourceMappingURL=Avatar.js.map
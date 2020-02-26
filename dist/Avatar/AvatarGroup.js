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
exports.AvatarGroup = function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    var avatarGroupStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    img {\n      position: relative;\n      border-color: ", ";\n      border-width: 2px;\n      border-style: solid;\n    }\n\n    img:nth-child(2) {\n      left: -12px;\n    }\n\n    img:nth-child(3) {\n      left: -24px;\n    }\n  "], ["\n    img {\n      position: relative;\n      border-color: ", ";\n      border-width: 2px;\n      border-style: solid;\n    }\n\n    img:nth-child(2) {\n      left: -12px;\n    }\n\n    img:nth-child(3) {\n      left: -24px;\n    }\n  "])), colorTheme[props.variant].base());
    return (react_1.default.createElement("div", { className: emotion_1.cx(avatarGroupStyles, props.styles) }, props.children));
};
exports.AvatarGroup.defaultProps = {
    variant: 'white'
};
var templateObject_1;
//# sourceMappingURL=AvatarGroup.js.map
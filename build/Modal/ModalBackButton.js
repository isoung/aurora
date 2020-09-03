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
var __1 = require("..");
var ModalBackButton = function (props) {
    var themeComponents = __1.useTheme().components;
    var backContainerStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 20px;\n    cursor: pointer;\n    height: fit-content;\n    width: fit-content;\n\n    &:hover {\n      i, span {\n        color: ", ";\n      }\n    }\n\n    i {\n      font-size: 14px;\n      margin-top: 2px;\n    }\n\n    span {\n      display: flex;\n      align-content: center;\n      margin-left: 20px;\n    }\n  "], ["\n    padding: 20px;\n    cursor: pointer;\n    height: fit-content;\n    width: fit-content;\n\n    &:hover {\n      i, span {\n        color: ", ";\n      }\n    }\n\n    i {\n      font-size: 14px;\n      margin-top: 2px;\n    }\n\n    span {\n      display: flex;\n      align-content: center;\n      margin-left: 20px;\n    }\n  "])), themeComponents.modal.activeForeground);
    return (react_1.default.createElement(__1.Container, { styles: backContainerStyles, alignItems: 'center', onClick: props.onClick },
        react_1.default.createElement(__1.Icon, { icon: 'far fa-arrow-left', variant: 'black' }),
        react_1.default.createElement(__1.Text, null, "Back")));
};
exports.ModalBackButton = ModalBackButton;
var templateObject_1;
//# sourceMappingURL=ModalBackButton.js.map
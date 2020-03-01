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
var ModalContent = function (props) {
    var modalContentStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding-left: 2rem;\n    padding-right: 2rem;\n  "], ["\n    padding-left: 2rem;\n    padding-right: 2rem;\n  "])));
    return (react_1.default.createElement("div", { className: emotion_1.cx(modalContentStyles, props.styles) }, props.children));
};
exports.ModalContent = ModalContent;
var templateObject_1;
//# sourceMappingURL=ModalContent.js.map
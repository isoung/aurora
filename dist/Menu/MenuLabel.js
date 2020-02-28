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
exports.MenuLabel = function (props) {
    var menuLabelStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 12px 16px 12px 16px;\n  "], ["\n    padding: 12px 16px 12px 16px;\n  "])));
    return (react_1.default.createElement("div", { className: emotion_1.cx(menuLabelStyles, props.styles) }, props.children));
};
var templateObject_1;
//# sourceMappingURL=MenuLabel.js.map
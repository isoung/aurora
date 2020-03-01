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
var FormField = function (props) {
    var formFieldStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    margin-bottom: 12px;\n\n    button:first-of-type {\n      position: absolute;\n      height: 100%;\n      border-top-left-radius: 0px;\n      border-bottom-left-radius: 0px;\n    }\n  "], ["\n    position: relative;\n    margin-bottom: 12px;\n\n    button:first-of-type {\n      position: absolute;\n      height: 100%;\n      border-top-left-radius: 0px;\n      border-bottom-left-radius: 0px;\n    }\n  "])));
    return (react_1.default.createElement("div", { className: emotion_1.cx(formFieldStyles, props.styles) }, props.children));
};
exports.FormField = FormField;
var templateObject_1;
//# sourceMappingURL=FormField.js.map
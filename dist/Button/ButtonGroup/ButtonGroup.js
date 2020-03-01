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
var ButtonGroup = function (props) {
    var buttonGroupStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    button:first-of-type {\n      border-top-left-radius: ", ";\n      border-bottom-left-radius: ", ";\n      border-top-right-radius: 0px;\n      border-bottom-right-radius: 0px;\n    }\n\n    button:not(:first-child):not(:last-child) {\n      border-radius: 0px;\n    }\n\n    button:last-of-type {\n      border-top-right-radius: ", ";\n      border-bottom-right-radius: ", ";\n      border-top-left-radius: 0px;\n      border-bottom-left-radius: 0px;\n    }\n  "], ["\n    button:first-of-type {\n      border-top-left-radius: ", ";\n      border-bottom-left-radius: ", ";\n      border-top-right-radius: 0px;\n      border-bottom-right-radius: 0px;\n    }\n\n    button:not(:first-child):not(:last-child) {\n      border-radius: 0px;\n    }\n\n    button:last-of-type {\n      border-top-right-radius: ", ";\n      border-bottom-right-radius: ", ";\n      border-top-left-radius: 0px;\n      border-bottom-left-radius: 0px;\n    }\n  "])), props.rounded ? '100px' : undefined, props.rounded ? '100px' : undefined, props.rounded ? '100px' : undefined, props.rounded ? '100px' : undefined);
    return (react_1.default.createElement("div", { className: emotion_1.cx(buttonGroupStyles, props.styles) }, props.children));
};
exports.ButtonGroup = ButtonGroup;
var templateObject_1;
//# sourceMappingURL=ButtonGroup.js.map
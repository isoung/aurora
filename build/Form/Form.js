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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var emotion_1 = require("emotion");
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var Form = function (props) {
    var formStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", ";\n    height: ", ";\n  "], ["\n    width: ", ";\n    height: ", ";\n  "])), props.width, props.height);
    return (react_1.default.createElement(__1.Component, __assign({ tag: 'form', styles: emotion_1.cx(formStyles, props.styles) }, props), props.children));
};
exports.Form = Form;
Form.displayName = 'Form';
var templateObject_1;
//# sourceMappingURL=Form.js.map
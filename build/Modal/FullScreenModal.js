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
var FullScreenModal = function (props) {
    var colors = __1.useTheme().colors;
    var fullScreenModalStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 100%;\n    width: 100%;\n    border-radius: 0px;\n    background-color: ", ";\n  "], ["\n    height: 100%;\n    width: 100%;\n    border-radius: 0px;\n    background-color: ", ";\n  "])), colors.light);
    return (react_1.default.createElement(__1.Modal, __assign({ styles: fullScreenModalStyles }, props, { animation: 'FADE', overlay: false }), props.children));
};
exports.FullScreenModal = FullScreenModal;
var templateObject_1;
//# sourceMappingURL=FullScreenModal.js.map
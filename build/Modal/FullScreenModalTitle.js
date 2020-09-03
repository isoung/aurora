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
var FullScreenModalTitle = function (props) {
    var themeComponents = __1.useTheme().components;
    var labelStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-bottom: 40px;\n    color: ", ";\n  "], ["\n    margin-bottom: 40px;\n    color: ", ";\n  "])), themeComponents.modal.foreground);
    return (react_1.default.createElement(__1.Label, { size: 'md', styles: labelStyles }, props.children));
};
exports.FullScreenModalTitle = FullScreenModalTitle;
FullScreenModalTitle.displayName = 'FullScreenModalTitle';
var templateObject_1;
//# sourceMappingURL=FullScreenModalTitle.js.map
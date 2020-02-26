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
var ThemeStore_1 = require("./Theme/ThemeStore");
exports.AuroraProvider = function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var fontTheme = themeStore.getFontTheme();
    var auroraProviderStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    :nth-child(1n) *:not(i):not(h1):not(h2):not(h3):not(h4):not(h5):not(h6):not(p):not(span) {\n      font-family: ", ";\n      font-size: ", ";\n    }\n  "], ["\n    :nth-child(1n) *:not(i):not(h1):not(h2):not(h3):not(h4):not(h5):not(h6):not(p):not(span) {\n      font-family: ", ";\n      font-size: ", ";\n    }\n  "])), fontTheme.fontFamily, fontTheme.normal);
    return (react_1.default.createElement("div", { className: auroraProviderStyles, id: 'aurora' }, props.children));
};
var templateObject_1;
//# sourceMappingURL=AuroraProvider.js.map
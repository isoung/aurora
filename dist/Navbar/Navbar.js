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
var Container_1 = require("../Layout/Container/Container");
var ThemeStore_1 = require("../Theme/ThemeStore");
exports.Navbar = function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    var navbarStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 100px;\n    width: 100%;\n    background-color: ", ";\n    box-sizing: border-box;\n    box-shadow:\n      rgba(17, 31, 93, 0.08) 3px 0px 30px,\n      rgba(27, 27, 43, 0.09) 2px 0px 5px;\n  "], ["\n    height: 100px;\n    width: 100%;\n    background-color: ", ";\n    box-sizing: border-box;\n    box-shadow:\n      rgba(17, 31, 93, 0.08) 3px 0px 30px,\n      rgba(27, 27, 43, 0.09) 2px 0px 5px;\n  "])), colorTheme[props.variant].base());
    return (react_1.default.createElement(Container_1.Container, { position: 'center', alignment: 'center', styles: emotion_1.cx(navbarStyles, props.styles) }, props.children));
};
exports.Navbar.defaultProps = {
    variant: 'white'
};
var templateObject_1;
//# sourceMappingURL=Navbar.js.map
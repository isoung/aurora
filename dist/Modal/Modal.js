"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __importDefault(require("color"));
var emotion_1 = require("emotion");
var react_1 = __importDefault(require("react"));
var unstated_next_1 = require("unstated-next");
var EntranceAnimation_1 = require("../Animation/EntranceAnimation");
var ResponsiveStyles_1 = require("../ResponsiveStyles");
var ThemeStore_1 = require("../Theme/ThemeStore");
var Modal = function (props) {
    var themeStore = unstated_next_1.useContainer(ThemeStore_1.ThemeStore);
    var colorTheme = themeStore.getColorTheme();
    var modalContentStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: fit-content;\n    height: fit-content;\n    margin: auto;\n    background-color: ", ";\n    border-radius: 6px;\n    z-index: 9999;\n\n    ", "\n  "], ["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: fit-content;\n    height: fit-content;\n    margin: auto;\n    background-color: ", ";\n    border-radius: 6px;\n    z-index: 9999;\n\n    ", "\n  "])), colorTheme.white.base(), ResponsiveStyles_1.getPropStyle(props));
    var modalOverlayStyles = emotion_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    background-color: ", ";\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    opacity: .4;\n    z-index: 9998;\n  "], ["\n    position: absolute;\n    background-color: ", ";\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    opacity: .4;\n    z-index: 9998;\n  "])), color_1.default(colorTheme.black.base()).toString());
    return (react_1.default.createElement("div", null, props.active &&
        (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: modalOverlayStyles, onClick: props.onClose }),
            react_1.default.createElement(EntranceAnimation_1.EntranceAnimation, { transitionDuration: .3, styles: emotion_1.cx(modalContentStyles, props.styles) }, props.children)))));
};
exports.Modal = Modal;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Modal.js.map
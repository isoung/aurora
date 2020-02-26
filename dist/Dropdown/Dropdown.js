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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var emotion_1 = require("emotion");
var react_1 = __importDefault(require("react"));
var Popover_1 = require("../Popover/Popover");
var ThemeStore_1 = require("../Theme/ThemeStore");
exports.Dropdown = function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    var styles = props.styles, content = props.content, active = props.active, onClose = props.onClose, popoverProps = __rest(props, ["styles", "content", "active", "onClose"]);
    var dropdownStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    box-shadow: 0 0.5em 1em -0.125em ", ",\n      0 0 0 1px ", ";\n    border-radius: 4px;\n\n    * {\n      cursor: ", ";\n    }\n\n    div:first-of-type {\n      border-top-left-radius: 4px;\n      border-top-right-radius: 4px;\n    }\n\n    div:last-of-type {\n      border-bottom-left-radius: 4px;\n      border-bottom-right-radius: 4px;\n    }\n\n    i {\n      margin-right: .5rem;\n    }\n  "], ["\n    background-color: ", ";\n    box-shadow: 0 0.5em 1em -0.125em ", ",\n      0 0 0 1px ", ";\n    border-radius: 4px;\n\n    * {\n      cursor: ", ";\n    }\n\n    div:first-of-type {\n      border-top-left-radius: 4px;\n      border-top-right-radius: 4px;\n    }\n\n    div:last-of-type {\n      border-bottom-left-radius: 4px;\n      border-bottom-right-radius: 4px;\n    }\n\n    i {\n      margin-right: .5rem;\n    }\n  "])), colorTheme.white.base(), colorTheme.dark.lighter(), colorTheme.light.base(), active ? 'pointer' : null);
    var dropdownOverlayStyles = emotion_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n  "], ["\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n  "])));
    var dropdownOverlayClick = function () {
        if (props.onClose) {
            props.onClose();
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Popover_1.Popover, __assign({}, popoverProps, { active: active, content: react_1.default.createElement("div", { className: emotion_1.cx(dropdownStyles, styles) }, content) }), props.children),
        active &&
            react_1.default.createElement("div", { className: dropdownOverlayStyles, onClick: dropdownOverlayClick })));
};
exports.Dropdown.defaultProps = {
    position: 'right'
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=Dropdown.js.map
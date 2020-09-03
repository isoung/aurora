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
var __1 = require("..");
var ButtonGroup = function (props) {
    var styles = props.styles, componentProps = __rest(props, ["styles"]);
    var buttonGroupStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    button {\n      box-shadow: none !important;\n    }\n\n    button:first-of-type {\n      border-top-left-radius: ", ";\n      border-bottom-left-radius: ", ";\n      border-top-right-radius: 0px;\n      border-bottom-right-radius: 0px;\n    }\n\n    button:not(:first-child):not(:last-child) {\n      border-radius: 0px;\n    }\n\n    button:last-of-type {\n      border-top-right-radius: ", ";\n      border-bottom-right-radius: ", ";\n      border-top-left-radius: 0px;\n      border-bottom-left-radius: 0px;\n    }\n  "], ["\n    button {\n      box-shadow: none !important;\n    }\n\n    button:first-of-type {\n      border-top-left-radius: ", ";\n      border-bottom-left-radius: ", ";\n      border-top-right-radius: 0px;\n      border-bottom-right-radius: 0px;\n    }\n\n    button:not(:first-child):not(:last-child) {\n      border-radius: 0px;\n    }\n\n    button:last-of-type {\n      border-top-right-radius: ", ";\n      border-bottom-right-radius: ", ";\n      border-top-left-radius: 0px;\n      border-bottom-left-radius: 0px;\n    }\n  "])), props.rounded ? '1000px' : undefined, props.rounded ? '1000px' : undefined, props.rounded ? '1000px' : undefined, props.rounded ? '1000px' : undefined);
    return (react_1.default.createElement(__1.Component, __assign({}, componentProps, { styles: emotion_1.cx(buttonGroupStyles, styles) }), props.children));
};
exports.ButtonGroup = ButtonGroup;
ButtonGroup.displayName = 'ButtonGroup';
var templateObject_1;
//# sourceMappingURL=ButtonGroup.js.map
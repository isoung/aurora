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
var Card = function (props) {
    var colors = __1.useTheme().colors;
    var styles = props.styles, variant = props.variant, containerProps = __rest(props, ["styles", "variant"]);
    var cardStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    border-radius: 8px;\n    padding: 12px 20px;\n\n    * {\n      color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    border-radius: 8px;\n    padding: 12px 20px;\n\n    * {\n      color: ", ";\n    }\n  "])), colors[variant], __1.getHoveredColor(colors[variant]));
    return (react_1.default.createElement(__1.Container, __assign({ tag: 'section' }, containerProps, { styles: emotion_1.cx(cardStyles, styles) }), props.children));
};
exports.Card = Card;
Card.displayName = 'Card';
Card.defaultProps = {
    boxShadow: 'base',
    variant: 'light'
};
var templateObject_1;
//# sourceMappingURL=Card.js.map
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
var __1 = require("../");
var ToggleButton = function (props) {
    var colors = __1.useTheme().colors;
    var active = props.active, variant = props.variant, styles = props.styles, onClick = props.onClick, buttonProps = __rest(props, ["active", "variant", "styles", "onClick"]);
    var toggleButtonStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: pointer;\n    border-radius: 1000px;\n    background-color: ", ";\n    padding: 4px 3px;\n    outline: none;\n    border: none;\n    position: relative;\n    background: linear-gradient(to right, ", " 50%, ", " 50%);\n    background-size: 200% 100%;\n    background-position: ", " bottom;\n    border: 1px solid ", ";\n\n    &:focus:not(:active) {\n      box-shadow: none;\n    }\n  "], ["\n    cursor: pointer;\n    border-radius: 1000px;\n    background-color: ", ";\n    padding: 4px 3px;\n    outline: none;\n    border: none;\n    position: relative;\n    background: linear-gradient(to right, ", " 50%, ", " 50%);\n    background-size: 200% 100%;\n    background-position: ", " bottom;\n    border: 1px solid ", ";\n\n    &:focus:not(:active) {\n      box-shadow: none;\n    }\n  "])), colors[variant], colors.white, colors[props.variant], active ? 'right' : 'left', colors[variant]);
    var innerToggleButtonStyles = emotion_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border-radius: 1000px;\n    height: 12px;\n    width: 12px;\n    background-color: ", ";\n    position: absolute;\n    transform: translateY(-50%);\n    margin-right: 3px;\n    right: ", ";\n  "], ["\n    border-radius: 1000px;\n    height: 12px;\n    width: 12px;\n    background-color: ", ";\n    position: absolute;\n    transform: translateY(-50%);\n    margin-right: 3px;\n    right: ", ";\n  "])), active ? colors.white : colors[variant], active ? null : '0');
    return (react_1.default.createElement(__1.Button, __assign({ styles: emotion_1.cx(toggleButtonStyles, styles), onClick: onClick }, buttonProps),
        react_1.default.createElement(__1.Container, { styles: innerToggleButtonStyles })));
};
exports.ToggleButton = ToggleButton;
ToggleButton.displayName = 'ToggleButton';
ToggleButton.defaultProps = {
    variant: 'black',
    active: false,
    height: '20px',
    width: '40px'
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=ToggleButton.js.map
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
var Container_1 = require("../Layout/Container/Container");
var NavbarBrand = function (props) {
    var styles = props.styles, containerProps = __rest(props, ["styles"]);
    var navbarBrandStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 100%;\n    padding-left: 24px;\n    padding-right: 24px;\n  "], ["\n    height: 100%;\n    padding-left: 24px;\n    padding-right: 24px;\n  "])));
    return (react_1.default.createElement(Container_1.Container, __assign({}, containerProps, { styles: emotion_1.cx(navbarBrandStyles, props.styles) }), props.children));
};
exports.NavbarBrand = NavbarBrand;
NavbarBrand.defaultProps = {
    alignment: 'center'
};
var templateObject_1;
//# sourceMappingURL=NavbarBrand.js.map
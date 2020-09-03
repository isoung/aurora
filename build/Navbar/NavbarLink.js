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
var react_router_dom_1 = require("react-router-dom");
var __1 = require("..");
var NavbarLink = function (props) {
    var colors = __1.useTheme().colors;
    var location = react_router_dom_1.useLocation();
    var active = location.pathname.includes(props.to.toString());
    var linkStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    padding: 6px 8px;\n    text-decoration: none;\n    background-color: ", ";\n    border-radius: 8px;\n    margin-right: 20px;\n\n    span {\n      color: ", ";\n    }\n\n    &:visited {\n      color: ", ";\n    }\n  "], ["\n    display: flex;\n    padding: 6px 8px;\n    text-decoration: none;\n    background-color: ", ";\n    border-radius: 8px;\n    margin-right: 20px;\n\n    span {\n      color: ", ";\n    }\n\n    &:visited {\n      color: ", ";\n    }\n  "])), active ? colors.link : null, active ? __1.getHoveredColor(colors.link) : null, colors.black);
    return (react_1.default.createElement(react_router_dom_1.Link, __assign({}, props, { className: emotion_1.cx(linkStyles, props.styles) }), props.children));
};
exports.NavbarLink = NavbarLink;
NavbarLink.displayName = 'NavbarLink';
var templateObject_1;
//# sourceMappingURL=NavbarLink.js.map
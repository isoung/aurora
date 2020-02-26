"use strict";
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
var react_1 = __importDefault(require("react"));
var Icon_1 = require("../../Icon/Icon");
exports.CloseButton = function (props) {
    var variant = props.variant, styles = props.styles, size = props.size, onClose = props.onClose, icon = props.icon, iconProps = __rest(props, ["variant", "styles", "size", "onClose", "icon"]);
    return (react_1.default.createElement(Icon_1.Icon, __assign({ onInteraction: onClose, icon: icon, size: size, styles: styles, isInteractable: true, variant: variant, interactableVariant: 'black' }, iconProps)));
};
exports.CloseButton.defaultProps = {
    variant: 'dark',
    icon: 'far fa-times'
};
//# sourceMappingURL=CloseButton.js.map
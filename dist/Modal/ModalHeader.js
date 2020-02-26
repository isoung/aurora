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
var CloseButton_1 = require("../Button/CloseButton/CloseButton");
var Container_1 = require("../Layout/Container/Container");
exports.ModalHeader = function (props) {
    var modalHeaderContainerStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding-left: 2rem;\n    padding-right: 1rem;\n    padding-top: .5rem;\n    padding-bottom: .75rem;\n  "], ["\n    padding-left: 2rem;\n    padding-right: 1rem;\n    padding-top: .5rem;\n    padding-bottom: .75rem;\n  "])));
    var modalHeaderContentStyles = emotion_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    flex-grow: 1;\n  "], ["\n    flex-grow: 1;\n  "])));
    var styles = props.styles, isInteractable = props.isInteractable, onInteraction = props.onInteraction, interactionIcon = props.interactionIcon, containerProps = __rest(props, ["styles", "isInteractable", "onInteraction", "interactionIcon"]);
    return (react_1.default.createElement(Container_1.Container, { styles: emotion_1.cx(modalHeaderContainerStyles, styles) },
        react_1.default.createElement(Container_1.Container, __assign({}, containerProps, { styles: modalHeaderContentStyles }), props.children),
        isInteractable && react_1.default.createElement(CloseButton_1.CloseButton, { size: '2x', onClose: onInteraction, icon: interactionIcon })));
};
exports.ModalHeader.defaultProps = {
    interactionIcon: 'far fa-times'
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=ModalHeader.js.map
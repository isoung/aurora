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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var emotion_1 = require("emotion");
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_popper_1 = require("react-popper");
var __1 = require("..");
var Popover = function (props) {
    var _a = react_1.useState(null), referenceElement = _a[0], setReferenceElement = _a[1];
    var _b = react_1.useState(null), popperElement = _b[0], setPopperElement = _b[1];
    var arrowElement = react_1.useState(null)[0];
    var overlayStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  "], ["\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  "])));
    var _c = react_popper_1.usePopper(referenceElement, popperElement, {
        modifiers: [
            { name: 'arrow', options: { element: arrowElement } },
            {
                name: 'offset',
                options: {
                    offset: [props.slidingOffset, props.offset],
                },
            }
        ],
        placement: props.position
    }), styles = _c.styles, attributes = _c.attributes;
    var bodyElement = document.getElementsByTagName('body')[0];
    return (react_1.default.createElement("div", { className: props.containerStyles, ref: setReferenceElement },
        props.children,
        react_dom_1.default.createPortal(props.active ? (react_1.default.createElement(__1.ThemeProvider, null,
            props.overlay && react_1.default.createElement("div", { className: emotion_1.cx(overlayStyles, props.overlayStyles), onClick: props.onClick }),
            react_1.default.createElement("div", __assign({ ref: setPopperElement, style: styles.popper, className: props.styles }, attributes.popper), props.content))) : null, bodyElement)));
};
exports.Popover = Popover;
Popover.defaultProps = {
    position: 'auto',
    offset: 4,
    slidingOffset: 0,
    overlay: false
};
var templateObject_1;
//# sourceMappingURL=Popover.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var framer_motion_1 = require("framer-motion");
var react_1 = __importDefault(require("react"));
var FadeAnimation = function (props) {
    var variants = {
        hidden: {
            opacity: props.hiddenOpacity
        },
        visible: {
            opacity: props.visibleOpacity,
            transition: {
                delay: props.visibleDelay
            }
        }
    };
    return (react_1.default.createElement(framer_motion_1.motion.div, { className: props.styles, variants: variants, initial: 'hidden', animate: 'visible' }, props.children));
};
exports.FadeAnimation = FadeAnimation;
FadeAnimation.defaultProps = {
    hiddenOpacity: 0,
    visibleOpacity: 1,
    visibleDelay: 0
};
//# sourceMappingURL=FadeAnimation.js.map
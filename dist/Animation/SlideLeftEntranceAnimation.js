"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var framer_motion_1 = require("framer-motion");
var react_1 = __importDefault(require("react"));
var SlideLeftEntranceAnimation = function (props) {
    var variants = {
        hidden: {
            x: props.hiddenX
        },
        visible: {
            x: props.visibleX
        }
    };
    var transition = {
        ease: 'easeOut',
        duration: props.transitionDuration
    };
    return (react_1.default.createElement(framer_motion_1.motion.div, { className: props.styles, variants: variants, transition: transition, initial: 'hidden', animate: 'visible' }, props.children));
};
exports.SlideLeftEntranceAnimation = SlideLeftEntranceAnimation;
SlideLeftEntranceAnimation.defaultProps = {
    visibleDelay: 0,
    visibleX: 0,
    transitionDuration: undefined
};
//# sourceMappingURL=SlideLeftEntranceAnimation.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var framer_motion_1 = require("framer-motion");
var react_1 = __importDefault(require("react"));
var EntranceAnimation = function (props) {
    var hiddenOpacity = props.hiddenOpacity, hiddenScale = props.hiddenScale, visibleOpacity = props.visibleOpacity, visibleScale = props.visibleScale, visibleDelay = props.visibleDelay, transitionDuration = props.transitionDuration;
    var variants = {
        hidden: {
            opacity: hiddenOpacity,
            scale: hiddenScale
        },
        visible: {
            opacity: visibleOpacity,
            scale: visibleScale,
            transition: {
                delay: visibleDelay
            }
        }
    };
    var transition = {
        duration: transitionDuration
    };
    return (react_1.default.createElement(framer_motion_1.motion.div, { className: props.styles, variants: variants, transition: transition, initial: 'hidden', animate: 'visible' }, props.children));
};
exports.EntranceAnimation = EntranceAnimation;
EntranceAnimation.defaultProps = {
    hiddenOpacity: 0,
    hiddenScale: 0,
    visibleOpacity: 1,
    visibleScale: 1,
    visibleDelay: 0,
    transitionDuration: undefined
};
//# sourceMappingURL=EntranceAnimation.js.map
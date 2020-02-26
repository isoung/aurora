"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var facepaint_1 = __importDefault(require("facepaint"));
var responsive = facepaint_1.default([
    '@media (min-width: 640px)',
    '@media (min-width: 960px)',
    '@media (min-width: 1200px)',
    '@media (min-width: 1600px)'
]);
exports.getPropStyle = function (props, defaultStyles) {
    if (defaultStyles === void 0) { defaultStyles = {}; }
    return responsive({
        width: props.width !== undefined ? props.width : defaultStyles.width,
        height: props.height !== undefined ? props.height : defaultStyles.height
    });
};
//# sourceMappingURL=ResponsiveStyles.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __importDefault(require("color"));
exports.getFontColorByBackground = function (background, colorTheme) {
    return color_1.default(colorTheme[background].base()).isLight() ? colorTheme.black.base() : colorTheme.white.base();
};
//# sourceMappingURL=Utils.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __importDefault(require("color"));
exports.getAccentColor = function (color, accentVariant, accentRatio) {
    if (accentVariant === void 0) { accentVariant = 'lighten'; }
    if (accentRatio === void 0) { accentRatio = .2; }
    var modifyColor = color_1.default(color);
    if (accentVariant === 'darken') {
        return modifyColor.darken(accentRatio).hex();
    }
    else {
        return modifyColor.lighten(accentRatio).hex();
    }
};
//# sourceMappingURL=Color.js.map
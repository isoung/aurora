"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __importDefault(require("color"));
exports.defaultColorTheme = {
    primary: {
        base: function () { return color_1.default('#333f87').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.primary.base()).lighten(.1).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.primary.base()).lighten(.2).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.primary.base()).darken(.1).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.primary.base()).darken(.2).toString(); }
    },
    secondary: {
        base: function () { return color_1.default('#ffca61').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.secondary.base()).lighten(.1).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.secondary.base()).lighten(.2).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.secondary.base()).darken(.1).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.secondary.base()).darken(.2).toString(); }
    },
    danger: {
        base: function () { return color_1.default('#ff1947').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.danger.base()).lighten(.1).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.danger.base()).lighten(.2).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.danger.base()).darken(.1).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.danger.base()).darken(.2).toString(); }
    },
    success: {
        base: function () { return color_1.default('#00b262').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.success.base()).lighten(.1).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.success.base()).lighten(.2).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.success.base()).darken(.1).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.success.base()).darken(.2).toString(); }
    },
    info: {
        base: function () { return color_1.default('#3B3E51').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.info.base()).lighten(.1).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.info.base()).lighten(.2).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.info.base()).darken(.1).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.info.base()).darken(.2).toString(); }
    },
    dark: {
        base: function () { return color_1.default('#a6a7ab').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.dark.base()).lighten(.1).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.dark.base()).lighten(.2).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.dark.base()).darken(.1).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.dark.base()).darken(.2).toString(); }
    },
    light: {
        base: function () { return color_1.default('#ededed').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.light.base()).lighten(.1).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.light.base()).lighten(.2).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.light.base()).darken(.1).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.light.base()).darken(.2).toString(); }
    },
    white: {
        base: function () { return color_1.default('#fff').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.white.base()).lighten(.1).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.white.base()).lighten(.2).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.white.base()).darken(.1).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.white.base()).darken(.2).toString(); }
    },
    black: {
        base: function () { return color_1.default('#252627').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.black.base()).lighten(.1).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.black.base()).lighten(.2).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.black.base()).darken(.1).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.black.base()).darken(.2).toString(); }
    }
};
//# sourceMappingURL=ColorPalette.js.map
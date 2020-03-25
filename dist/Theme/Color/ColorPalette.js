"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __importDefault(require("color"));
exports.defaultColorTheme = {
    primary: {
        base: function () { return color_1.default('#262666').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.primary.base()).lighten(.15).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.primary.base()).lighten(.3).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.primary.base()).darken(.15).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.primary.base()).darken(.3).toString(); }
    },
    secondary: {
        base: function () { return color_1.default('#e5b657').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.secondary.base()).lighten(.15).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.secondary.base()).lighten(.3).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.secondary.base()).darken(.15).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.secondary.base()).darken(.3).toString(); }
    },
    danger: {
        base: function () { return color_1.default('#ff1947').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.danger.base()).lighten(.15).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.danger.base()).lighten(.3).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.danger.base()).darken(.15).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.danger.base()).darken(.3).toString(); }
    },
    success: {
        base: function () { return color_1.default('#00b262').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.success.base()).lighten(.15).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.success.base()).lighten(.3).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.success.base()).darken(.15).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.success.base()).darken(.3).toString(); }
    },
    warning: {
        base: function () { return color_1.default('#ffc402').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.success.base()).lighten(.15).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.success.base()).lighten(.3).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.success.base()).darken(.15).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.success.base()).darken(.3).toString(); }
    },
    info: {
        base: function () { return color_1.default('#3B3E51').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.info.base()).lighten(.15).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.info.base()).lighten(.3).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.info.base()).darken(.15).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.info.base()).darken(.3).toString(); }
    },
    dark: {
        base: function () { return color_1.default('#a6a7ab').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.dark.base()).lighten(.15).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.dark.base()).lighten(.3).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.dark.base()).darken(.15).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.dark.base()).darken(.3).toString(); }
    },
    gray: {
        base: function () { return color_1.default('#d1dbe0').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.gray.base()).lighten(.15).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.gray.base()).lighten(.3).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.gray.base()).darken(.15).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.gray.base()).darken(.3).toString(); }
    },
    light: {
        base: function () { return color_1.default('#ededed').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.light.base()).lighten(.15).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.light.base()).lighten(.3).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.light.base()).darken(.15).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.light.base()).darken(.3).toString(); }
    },
    white: {
        base: function () { return color_1.default('#fff').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.white.base()).lighten(.15).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.white.base()).lighten(.3).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.white.base()).darken(.15).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.white.base()).darken(.3).toString(); }
    },
    black: {
        base: function () { return color_1.default('#252627').toString(); },
        light: function () { return color_1.default(exports.defaultColorTheme.black.base()).lighten(.15).toString(); },
        lighter: function () { return color_1.default(exports.defaultColorTheme.black.base()).lighten(.3).toString(); },
        dark: function () { return color_1.default(exports.defaultColorTheme.black.base()).darken(.15).toString(); },
        darker: function () { return color_1.default(exports.defaultColorTheme.black.base()).darken(.3).toString(); }
    }
};
//# sourceMappingURL=ColorPalette.js.map
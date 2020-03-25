"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var unstated_next_1 = require("unstated-next");
var ColorPalette_1 = require("../Theme/Color/ColorPalette");
var FontTheme_1 = require("./Font/FontTheme");
function useThemeStore(initialState) {
    if (initialState === void 0) { initialState = {
        colorTheme: ColorPalette_1.defaultColorTheme,
        fontTheme: FontTheme_1.defaultFontTheme
    }; }
    var _a = react_1.useState({
        primary: __assign(__assign({}, ColorPalette_1.defaultColorTheme.primary), initialState.colorTheme.primary),
        secondary: __assign(__assign({}, ColorPalette_1.defaultColorTheme.secondary), initialState.colorTheme.secondary),
        danger: __assign(__assign({}, ColorPalette_1.defaultColorTheme.danger), initialState.colorTheme.danger),
        success: __assign(__assign({}, ColorPalette_1.defaultColorTheme.success), initialState.colorTheme.success),
        warning: __assign(__assign({}, ColorPalette_1.defaultColorTheme.warning), initialState.colorTheme.warning),
        info: __assign(__assign({}, ColorPalette_1.defaultColorTheme.info), initialState.colorTheme.info),
        dark: __assign(__assign({}, ColorPalette_1.defaultColorTheme.dark), initialState.colorTheme.dark),
        gray: __assign(__assign({}, ColorPalette_1.defaultColorTheme.gray), initialState.colorTheme.gray),
        light: __assign(__assign({}, ColorPalette_1.defaultColorTheme.light), initialState.colorTheme.light),
        white: __assign(__assign({}, ColorPalette_1.defaultColorTheme.white), initialState.colorTheme.white),
        black: __assign(__assign({}, ColorPalette_1.defaultColorTheme.black), initialState.colorTheme.black)
    }), colorTheme = _a[0], setColorThemeState = _a[1];
    var _b = react_1.useState(__assign(__assign({}, FontTheme_1.defaultFontTheme), initialState.fontTheme)), fontTheme = _b[0], setFontThemeState = _b[1];
    var getColorTheme = function () { return colorTheme; };
    var setColorTheme = function (theme) { return setColorThemeState(__assign(__assign({}, colorTheme), theme)); };
    var getFontTheme = function () { return fontTheme; };
    var setFontTheme = function (theme) { return setFontThemeState(__assign(__assign({}, fontTheme), theme)); };
    return {
        getColorTheme: getColorTheme,
        setColorTheme: setColorTheme,
        getFontTheme: getFontTheme,
        setFontTheme: setFontTheme
    };
}
exports.ThemeStore = unstated_next_1.createContainer(useThemeStore);
//# sourceMappingURL=ThemeStore.js.map
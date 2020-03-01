"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __importDefault(require("color"));
var emotion_1 = require("emotion");
var react_1 = __importDefault(require("react"));
var EntranceAnimation_1 = require("../../Animation/EntranceAnimation");
var Container_1 = require("../../Layout/Container/Container");
var ThemeStore_1 = require("../../Theme/ThemeStore");
var RadioButton = function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    var radioButtonContainerStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: pointer;\n    padding: 8px 12px 8px 12px;\n    border-radius: 32px;\n\n    &:hover {\n      background-color: ", ";\n    }\n  "], ["\n    cursor: pointer;\n    padding: 8px 12px 8px 12px;\n    border-radius: 32px;\n\n    &:hover {\n      background-color: ", ";\n    }\n  "])), color_1.default(colorTheme[props.variant].light()).fade(.6).toString());
    var radioButtonStyles = emotion_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: ", ";\n    box-shadow: inset 0 1px 2px ", ";\n\n    transition: background-color 100ms ease-in-out;\n  "], ["\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: ", ";\n    box-shadow: inset 0 1px 2px ", ";\n\n    transition: background-color 100ms ease-in-out;\n  "])), props.selected ? colorTheme[props.variant].light() : colorTheme[props.innerColor].base(), colorTheme.black.base());
    var radioInnerButtonStyles = emotion_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: ", ";\n    box-shadow: inset 0 1px 4px ", ";\n  "], ["\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: ", ";\n    box-shadow: inset 0 1px 4px ", ";\n  "])), colorTheme.light.light(), colorTheme.light.darker());
    var radioButtonBorder = emotion_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    border-radius: 50%;\n    background-image: -webkit-gradient(\n      linear,\n      left bottom,\n      left top, color-stop(0.33, ", "), color-stop(0.67, ", "));\n    padding: 1px;\n    margin-right: 16px;\n  "], ["\n    border-radius: 50%;\n    background-image: -webkit-gradient(\n      linear,\n      left bottom,\n      left top, color-stop(0.33, ", "), color-stop(0.67, ", "));\n    padding: 1px;\n    margin-right: 16px;\n  "])), colorTheme.light.darker(), colorTheme.light.dark());
    var radioButtonClick = function () {
        if (props.onSelected) {
            props.onSelected();
        }
    };
    return (react_1.default.createElement(Container_1.Container, { position: 'space-between', alignment: 'center', styles: emotion_1.cx(radioButtonContainerStyles, props.styles), onClick: radioButtonClick },
        react_1.default.createElement(Container_1.Container, { styles: radioButtonBorder },
            react_1.default.createElement(Container_1.Container, { styles: radioButtonStyles, position: 'center', alignment: 'center' }, props.selected &&
                react_1.default.createElement(EntranceAnimation_1.EntranceAnimation, { styles: radioInnerButtonStyles }))),
        react_1.default.createElement(Container_1.Container, null, props.children)));
};
exports.RadioButton = RadioButton;
RadioButton.defaultProps = {
    variant: 'primary',
    innerColor: 'white'
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=RadioButton.js.map
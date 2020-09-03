"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var emotion_1 = require("emotion");
var react_1 = __importStar(require("react"));
var __1 = require("..");
var Modal = function (props) {
    var theme = __1.useTheme();
    var colorTheme = theme.colors;
    var modalContentStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: fit-content;\n    height: fit-content;\n    margin: auto;\n    background-color: ", ";\n    border-radius: 6px;\n    z-index: 9999;\n  "], ["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: fit-content;\n    height: fit-content;\n    margin: auto;\n    background-color: ", ";\n    border-radius: 6px;\n    z-index: 9999;\n  "])), colorTheme.white);
    var modalOverlayStyles = emotion_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    background-color: ", ";\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    opacity: .5;\n    z-index: 9998;\n  "], ["\n    position: absolute;\n    background-color: ", ";\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    opacity: .5;\n    z-index: 9998;\n  "])), colorTheme.black);
    var escapeKeyDownFn = function (event) {
        if (event.keyCode === 27) {
            props.onClick();
        }
    };
    react_1.useEffect(function () {
        if (props.active) {
            document.addEventListener('keydown', escapeKeyDownFn, false);
        }
        else {
            document.removeEventListener('keydown', escapeKeyDownFn, false);
        }
    }, [props.active]);
    var generateAnimation = function () {
        switch (props.animation) {
            case 'FADE':
                return (react_1.default.createElement(__1.FadeAnimation, { transitionDuration: .3, styles: emotion_1.cx(modalContentStyles, props.styles) }, props.children));
            default:
                return (react_1.default.createElement(__1.EntranceAnimation, { transitionDuration: .3, styles: emotion_1.cx(modalContentStyles, props.styles) }, props.children));
        }
    };
    return (react_1.default.createElement("div", null, props.active &&
        (react_1.default.createElement(react_1.default.Fragment, null,
            props.overlay && react_1.default.createElement("div", { className: modalOverlayStyles, onClick: props.onClick }),
            generateAnimation()))));
};
exports.Modal = Modal;
Modal.defaultProps = {
    animation: 'DEFAULT',
    overlay: true
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=Modal.js.map
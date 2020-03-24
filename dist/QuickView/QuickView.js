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
var SlideLeftEntranceAnimation_1 = require("../Animation/SlideLeftEntranceAnimation");
var ResponsiveStyles_1 = require("../ResponsiveStyles");
var ThemeStore_1 = require("../Theme/ThemeStore");
var QuickView = function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    var _a = react_1.useState(props.startingWidth ? props.startingWidth : 0), width = _a[0], setWidth = _a[1];
    var childRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var current = childRef.current;
        if (current) {
            var boundingRect = current.getBoundingClientRect();
            setWidth(boundingRect.width);
        }
    });
    var quickViewOverlayStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    background-color: ", ";\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    opacity: .4;\n    z-index: 9998;\n  "], ["\n    position: absolute;\n    background-color: ", ";\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    opacity: .4;\n    z-index: 9998;\n  "])), colorTheme.black.base());
    var quickViewContentStyles = emotion_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: ", ";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 9999;\n    will-change: transform;\n\n    ", "\n  "], ["\n    background-color: ", ";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 9999;\n    will-change: transform;\n\n    ", "\n  "])), colorTheme.white.base(), ResponsiveStyles_1.getPropStyle(props));
    return (react_1.default.createElement("div", null, props.active &&
        (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: quickViewOverlayStyles, onClick: function () { return props.onClose(); } }),
            react_1.default.createElement(SlideLeftEntranceAnimation_1.SlideLeftEntranceAnimation, { hiddenX: width, visibleDelay: .05, transitionDuration: .3, styles: emotion_1.cx(quickViewContentStyles, props.styles) },
                react_1.default.createElement("div", { ref: childRef }, props.children))))));
};
exports.QuickView = QuickView;
var templateObject_1, templateObject_2;
//# sourceMappingURL=QuickView.js.map
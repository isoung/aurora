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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var emotion_1 = require("emotion");
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var EntranceAnimation_1 = require("../Animation/EntranceAnimation");
var ThemeStore_1 = require("../Theme/ThemeStore");
var Popover = function (props) {
    var _a = react_1.useState(null), height = _a[0], setHeight = _a[1];
    var _b = react_1.useState(null), width = _b[0], setWidth = _b[1];
    var _c = react_1.useState(null), left = _c[0], setLeft = _c[1];
    var _d = react_1.useState(null), top = _d[0], setTop = _d[1];
    var _e = react_1.useState(null), right = _e[0], setRight = _e[1];
    var _f = react_1.useState(null), bottom = _f[0], setBottom = _f[1];
    var childRef = react_1.useRef(null);
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    react_1.useEffect(function () {
        var current = childRef.current;
        var setPositionFn = function () {
            var resizedBoundingRect = current.getBoundingClientRect();
            setTop(resizedBoundingRect.top);
            setLeft(resizedBoundingRect.left);
            setBottom(resizedBoundingRect.bottom);
            setRight(resizedBoundingRect.right);
            setHeight(resizedBoundingRect.height);
            setWidth(resizedBoundingRect.width);
        };
        window.addEventListener('resize', setPositionFn);
        var boundingRect = current.getBoundingClientRect();
        setTop(boundingRect.top);
        setLeft(boundingRect.left);
        setBottom(boundingRect.bottom);
        setRight(boundingRect.right);
        setHeight(boundingRect.height
            + props.marginTop
            + props.marginBottom
            + props.paddingTop
            + props.paddingBottom);
        setWidth(boundingRect.width
            + props.marginLeft
            + props.marginRight
            + props.paddingLeft
            + props.paddingRight);
        return function () {
            window.removeEventListener('resize', setPositionFn);
        };
    });
    var generateLeftStyles = function () {
        if (props.position === 'right') {
            return "calc(" + left + "px + " + width + "px)";
        }
        else if (props.position === 'top') {
            return left + "px";
        }
        else if (props.position === 'top-left') {
            return "calc(100% - " + right + "px)";
        }
        else if (props.position === 'bottom') {
            return right - width + "px";
        }
        else if (props.position === 'bottom-left') {
            return "calc(100% - " + right + "px)";
        }
        else {
            return undefined;
        }
    };
    var generateTopStyles = function () {
        if (props.position === 'left') {
            return bottom - height + "px";
        }
        else if (props.position === 'right') {
            return top + "px";
        }
        else if (props.position === 'bottom' ||
            props.position === 'bottom-left' ||
            props.position === 'bottom-right') {
            return bottom + "px";
        }
        else {
            return undefined;
        }
    };
    var generateRightStyles = function () {
        if (props.position === 'left') {
            return "calc(100% - " + left + "px)";
        }
        else if (props.position === 'top-right') {
            return "calc(100% - " + right + "px)";
        }
        else if (props.position === 'bottom-right') {
            return "calc(100% - " + right + "px)";
        }
        else {
            return undefined;
        }
    };
    var generateBottomStyles = function () {
        return props.position === 'top' || props.position === 'top-left' || props.position === 'top-right'
            ? "calc(100% - " + top + "px)"
            : undefined;
    };
    var popoverStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-family: ", ";\n    position: absolute;\n    left: ", ";\n    top: ", ";\n    right: ", ";\n    bottom: ", ";\n    margin-bottom: ", ";\n    margin-top: ", ";\n    margin-left: ", ";\n    margin-right: ", ";\n    display: flex;\n    z-index: 123819223;\n  "], ["\n    font-family: ", ";\n    position: absolute;\n    left: ", ";\n    top: ", ";\n    right: ", ";\n    bottom: ", ";\n    margin-bottom: ",
        ";\n    margin-top: ",
        ";\n    margin-left: ", ";\n    margin-right: ", ";\n    display: flex;\n    z-index: 123819223;\n  "])), themeStore.getFontTheme().fontFamily, generateLeftStyles(), generateTopStyles(), generateRightStyles(), generateBottomStyles(), props.position === 'top' ||
        props.position === 'top-left' ||
        props.position === 'top-right'
        ? '8px'
        : undefined, props.position === 'bottom' ||
        props.position === 'bottom-left' ||
        props.position === 'bottom-right'
        ? '8px'
        : undefined, props.position === 'right' ? '8px' : undefined, props.position === 'left' ? '8px' : undefined);
    var popoverContainerStyles = emotion_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: fit-content;\n  "], ["\n    width: fit-content;\n  "])));
    var bodyElement = document.getElementsByTagName('body')[0];
    return (react_1.default.createElement("div", { className: emotion_1.cx(popoverContainerStyles, props.containerStyles), ref: childRef },
        props.children,
        react_dom_1.default.createPortal(props.active ? (react_1.default.createElement(ThemeStore_1.ThemeStore.Provider, { initialState: {
                colorTheme: themeStore.getColorTheme(),
                fontTheme: themeStore.getFontTheme(),
            } },
            react_1.default.createElement(EntranceAnimation_1.EntranceAnimation, { hiddenScale: 0.9, visibleDelay: 0.05, styles: emotion_1.cx(popoverStyles, props.styles) }, props.content))) : null, bodyElement)));
};
exports.Popover = Popover;
Popover.defaultProps = {
    position: 'top',
    paddingBottom: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
    marginBottom: 0,
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=Popover.js.map
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
    var _a = react_1.useState(null), left = _a[0], setLeft = _a[1];
    var _b = react_1.useState(null), top = _b[0], setTop = _b[1];
    var _c = react_1.useState(null), right = _c[0], setRight = _c[1];
    var _d = react_1.useState(null), bottom = _d[0], setBottom = _d[1];
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
        };
        window.addEventListener('resize', setPositionFn);
        var boundingRect = current.getBoundingClientRect();
        setTop(boundingRect.top);
        setLeft(boundingRect.left);
        setBottom(boundingRect.bottom);
        setRight(boundingRect.right);
        return function () {
            window.removeEventListener('resize', setPositionFn);
        };
    });
    var generateLeftStyles = function () {
        if (props.position === 'right') {
            return right + "px";
        }
        else if (props.position === 'top') {
            return left + "px";
        }
        else if (props.position === 'bottom') {
            return left + "px";
        }
        else {
            return undefined;
        }
    };
    var generateTopStyles = function () {
        if (props.position === 'left') {
            return top + "px";
        }
        else if (props.position === 'right') {
            return top + "px";
        }
        else if (props.position === 'bottom') {
            return bottom + "px";
        }
        else {
            return undefined;
        }
    };
    var generateRightStyles = function () {
        if (props.position === 'left') {
            return right + "px";
        }
        else {
            return undefined;
        }
    };
    var generateBottomStyles = function () {
        return props.position === 'top' ? bottom + "px" : undefined;
    };
    var popoverStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-family: ", ";\n    position: absolute;\n    left: ", ";\n    top: ", ";\n    right: ", ";\n    bottom: ", ";\n    margin-bottom: ", ";\n    margin-top: ", ";\n    margin-left: ", ";\n    margin-right: ", ";\n    display: flex;\n  "], ["\n    font-family: ", ";\n    position: absolute;\n    left: ", ";\n    top: ", ";\n    right: ", ";\n    bottom: ", ";\n    margin-bottom: ", ";\n    margin-top: ", ";\n    margin-left: ", ";\n    margin-right: ", ";\n    display: flex;\n  "])), themeStore.getFontTheme().fontFamily, generateLeftStyles(), generateTopStyles(), generateRightStyles(), generateBottomStyles(), props.position === 'top' ? '8px' : undefined, props.position === 'bottom' ? '8px' : undefined, props.position === 'right' ? '8px' : undefined, props.position === 'left' ? '8px' : undefined);
    var bodyElement = document.getElementsByTagName('body')[0];
    return (react_1.default.createElement("div", { ref: childRef },
        props.children,
        react_dom_1.default.createPortal((props.active ?
            (react_1.default.createElement(ThemeStore_1.ThemeStore.Provider, { initialState: {
                    colorTheme: themeStore.getColorTheme(),
                    fontTheme: themeStore.getFontTheme()
                } },
                react_1.default.createElement(EntranceAnimation_1.EntranceAnimation, { hiddenScale: .9, visibleDelay: .05, styles: emotion_1.cx(popoverStyles, props.styles) }, props.content))) : null), bodyElement)));
};
exports.Popover = Popover;
Popover.defaultProps = {
    position: 'top'
};
var templateObject_1;
//# sourceMappingURL=Popover.js.map
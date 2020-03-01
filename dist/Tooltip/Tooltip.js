"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var Popover_1 = require("../Popover/Popover");
var Utils_1 = require("../Theme/Color/Utils");
var ThemeStore_1 = require("../Theme/ThemeStore");
var Tooltip = function (props) {
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    var _a = react_1.useState(null), top = _a[0], setTop = _a[1];
    var _b = react_1.useState(null), left = _b[0], setLeft = _b[1];
    var childRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var current = childRef.current;
        var boundingRect = current.getBoundingClientRect();
        setLeft((boundingRect.right - boundingRect.left) / 2);
        setTop((boundingRect.bottom - boundingRect.top) / 2);
    }, []);
    var variant = props.variant, styles = props.styles, position = props.position, tooltipProps = __rest(props, ["variant", "styles", "position"]);
    var generateTopStyles = function () {
        if (position === 'top') {
            return '100%';
        }
        else if (position === 'right') {
            return top + "px";
        }
        else if (position === 'bottom') {
            return '-10px';
        }
        else if (position === 'left') {
            return top + "px";
        }
    };
    var generateLeftStyles = function () {
        if (position === 'top') {
            return left + "px";
        }
        else if (position === 'right') {
            return '-10px';
        }
        else if (position === 'bottom') {
            return left + "px";
        }
        else if (position === 'left') {
            return '100%';
        }
    };
    var generateBorderColor = function () {
        if (position === 'top') {
            return colorTheme[variant].base() + " transparent transparent transparent";
        }
        else if (position === 'right') {
            return "transparent " + colorTheme[variant].base() + " transparent transparent";
        }
        else if (position === 'bottom') {
            return "transparent transparent " + colorTheme[variant].base() + " transparent";
        }
        else if (position === 'left') {
            return "transparent transparent transparent " + colorTheme[variant].base();
        }
    };
    var tooltipStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    color: ", ";\n    padding: 14px;\n    border-radius: 4px;\n\n    &:after {\n      content: \" \";\n      position: absolute;\n      top: ", ";\n      left: ", ";\n      border-width: 5px;\n      border-style: solid;\n      border-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    color: ", ";\n    padding: 14px;\n    border-radius: 4px;\n\n    &:after {\n      content: \" \";\n      position: absolute;\n      top: ", ";\n      left: ", ";\n      border-width: 5px;\n      border-style: solid;\n      border-color: ", ";\n    }\n  "])), colorTheme[variant].base(), Utils_1.getFontColorByBackground(variant, colorTheme), generateTopStyles(), generateLeftStyles(), generateBorderColor());
    return (react_1.default.createElement(Popover_1.Popover, __assign({}, tooltipProps, { position: position, content: react_1.default.createElement("div", { className: emotion_1.cx(tooltipStyles, styles) }, props.content) }),
        react_1.default.createElement("div", { ref: childRef }, props.children)));
};
exports.Tooltip = Tooltip;
Tooltip.defaultProps = {
    variant: 'white',
    position: 'top'
};
var templateObject_1;
//# sourceMappingURL=Tooltip.js.map
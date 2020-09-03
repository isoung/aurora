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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var FullScreenModalContainer = function (props) {
    return (react_1.default.createElement(__1.Container, { alignItems: 'center', justifyContent: 'center', height: 'calc(100% - 120px)', width: '100%' },
        react_1.default.createElement(__1.Container, __assign({}, props, { styles: props.styles, flexFlow: 'column' }), props.children)));
};
exports.FullScreenModalContainer = FullScreenModalContainer;
FullScreenModalContainer.displayName = 'FullScreenModalContainer';
FullScreenModalContainer.defaultProps = {
    width: '1000px',
    height: '700px'
};
//# sourceMappingURL=FullScreenModalContainer.js.map
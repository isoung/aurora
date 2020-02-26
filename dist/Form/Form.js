"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var emotion_1 = require("emotion");
var react_1 = __importDefault(require("react"));
exports.Form = function (props) {
    return (react_1.default.createElement("form", { className: emotion_1.cx(props.styles) }, props.children));
};
//# sourceMappingURL=Form.js.map
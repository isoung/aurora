"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var facepaint_1 = __importDefault(require("facepaint"));
var BreakPoints = [
    576, 768, 992, 1200
];
exports.MediaQueries = facepaint_1.default(__spreadArrays(['@media (max-width: 576px)'], BreakPoints.map(function (bp) { return "@media (min-width: " + bp + "px)"; })));
//# sourceMappingURL=MediaQueries.js.map
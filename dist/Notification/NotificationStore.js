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
var react_1 = require("react");
var unstated_next_1 = require("unstated-next");
var v4_1 = __importDefault(require("uuid/v4"));
function useNotificationStore(initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = react_1.useState([]), notifications = _a[0], setNotifications = _a[1];
    var getNotifications = function () { return notifications; };
    var createNotification = function (text, variant) {
        if (variant === void 0) { variant = 'info'; }
        var notification = {
            id: v4_1.default(),
            text: text,
            variant: variant
        };
        setNotifications(__spreadArrays(notifications, [notification]));
    };
    var removeNotification = function (id) {
        setNotifications(function (oldNotifications) {
            return oldNotifications.filter(function (n) { return n.id !== id; });
        });
    };
    return {
        getNotifications: getNotifications,
        createNotification: createNotification,
        removeNotification: removeNotification
    };
}
exports.NotificationStore = unstated_next_1.createContainer(useNotificationStore);
//# sourceMappingURL=NotificationStore.js.map
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var emotion_1 = require("emotion");
var react_1 = __importDefault(require("react"));
var Notification_1 = require("./Notification");
var NotificationStore_1 = require("./NotificationStore");
exports.NotificationProvider = function (props) {
    var notificationStore = NotificationStore_1.NotificationStore.useContainer();
    var notificationProviderStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    z-index: 1;\n    top: 5px;\n    right: 5px;\n  "], ["\n    position: absolute;\n    z-index: 1;\n    top: 5px;\n    right: 5px;\n  "])));
    return (react_1.default.createElement("div", { className: notificationProviderStyles }, notificationStore.getNotifications().map(function (value) {
        return react_1.default.createElement(Notification_1.Notification, { key: value.id, id: value.id, text: value.text, variant: value.variant });
    })));
};
exports.NotificationProvider.defaultProps = {
    position: 'top-right'
};
var templateObject_1;
//# sourceMappingURL=NotificationProvider.js.map
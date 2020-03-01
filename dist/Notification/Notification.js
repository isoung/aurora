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
var EntranceAnimation_1 = require("../Animation/EntranceAnimation");
var CloseButton_1 = require("../Button/CloseButton/CloseButton");
var Container_1 = require("../Layout/Container/Container");
var ThemeStore_1 = require("../Theme/ThemeStore");
var Text_1 = require("../Typography/Text");
var NotificationStore_1 = require("./NotificationStore");
var Notification = function (props) {
    var notificationStore = NotificationStore_1.NotificationStore.useContainer();
    var themeStore = ThemeStore_1.ThemeStore.useContainer();
    var colorTheme = themeStore.getColorTheme();
    react_1.useEffect(function () {
        var timeout = setTimeout(function () {
            notificationStore.removeNotification(props.id);
        }, props.duration);
        return function () {
            clearTimeout(timeout);
        };
    }, []);
    var notificationStyles = emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    background-color: ", ";\n    border-left: 8px solid ", ";\n    box-shadow: 0 1px 4px ", ";\n    border-radius: 4px;\n    padding: .75rem;\n    margin-bottom: 12px;\n  "], ["\n    position: relative;\n    background-color: ", ";\n    border-left: 8px solid ", ";\n    box-shadow: 0 1px 4px ", ";\n    border-radius: 4px;\n    padding: .75rem;\n    margin-bottom: 12px;\n  "])), colorTheme.white.base(), colorTheme[props.variant].base(), colorTheme.dark.base());
    var contentContainerStyles = emotion_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    padding: .75rem;\n    border-right: .5px solid ", ";\n    flex-grow: 1;\n  "], ["\n    padding: .75rem;\n    border-right: .5px solid ", ";\n    flex-grow: 1;\n  "])), colorTheme.light.base());
    var closeButtonStyles = emotion_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-size: 20px;\n  "], ["\n    font-size: 20px;\n  "])));
    var commandContainerStyles = emotion_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    margin-left: 1rem;\n    width: 40px;\n  "], ["\n    margin-left: 1rem;\n    width: 40px;\n  "])));
    var commandStyles = emotion_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    cursor: pointer;\n    padding: 4px;\n    border-radius: 4px;\n\n    &:hover {\n      background-color: ", ";\n\n      i {\n        color: ", ";\n      }\n    }\n  "], ["\n    cursor: pointer;\n    padding: 4px;\n    border-radius: 4px;\n\n    &:hover {\n      background-color: ", ";\n\n      i {\n        color: ", ";\n      }\n    }\n  "])), colorTheme.light.base(), colorTheme.danger.base());
    return (react_1.default.createElement(EntranceAnimation_1.EntranceAnimation, null,
        react_1.default.createElement(Container_1.Container, { styles: emotion_1.cx(notificationStyles, props.styles) },
            react_1.default.createElement(Container_1.Container, { styles: contentContainerStyles }, props.text),
            react_1.default.createElement(Container_1.Container, { position: 'center', alignment: 'center', styles: commandContainerStyles },
                react_1.default.createElement("div", { className: commandStyles, onClick: function () { return notificationStore.removeNotification(props.id); } },
                    react_1.default.createElement(Container_1.Container, { position: 'center' },
                        react_1.default.createElement(CloseButton_1.CloseButton, { styles: closeButtonStyles, variant: 'danger', onClose: function () { return null; } })),
                    react_1.default.createElement(Text_1.Text, null, "Close"))))));
};
exports.Notification = Notification;
Notification.defaultProps = {
    variant: 'primary',
    duration: 5000
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Notification.js.map
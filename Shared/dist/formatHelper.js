"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatHelper = void 0;
var validator_1 = require("validator");
var FormatHelper = /** @class */ (function () {
    function FormatHelper() {
    }
    FormatHelper.validateEmail = function (emailToVerify) {
        return validator_1.default.isEmail(emailToVerify);
    };
    return FormatHelper;
}());
exports.FormatHelper = FormatHelper;

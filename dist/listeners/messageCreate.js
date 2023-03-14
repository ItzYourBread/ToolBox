"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageCreate = void 0;
var tslib_1 = require("tslib");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
require("dotenv/config");
function messageCreate(client) {
    var _this = this;
    client.on('messageCreate', function (msg) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            console.log(chalk_1.default.cyanBright('[Listener] messageCreate is loaded'));
            return [2];
        });
    }); });
}
exports.messageCreate = messageCreate;

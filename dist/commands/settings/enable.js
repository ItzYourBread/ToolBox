"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var eris_1 = require("eris");
exports.default = {
    data: {
        name: "enable",
        description: "Eanble subcommand",
        options: [
            {
                name: "channel",
                description: "Enable unlock social",
                type: eris_1.Constants.ApplicationCommandOptionTypes.SUB_COMMAND
            }
        ]
    },
    execute: function (client, interaction) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2];
            });
        });
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
var tslib_1 = require("tslib");
var mongoose_1 = tslib_1.__importStar(require("mongoose"));
var profileSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, required: true },
    cash: { type: Number, default: 200 },
});
var Profile = mongoose_1.default.model('profile', profileSchema);
exports.Profile = Profile;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send('Hello, World!');
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server running on port ".concat(port));
});

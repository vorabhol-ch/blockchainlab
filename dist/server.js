"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errorhandler_1 = __importDefault(require("errorhandler"));
var app_1 = __importDefault(require("./app"));
/**
 * Error Handler. Provides full stack - remove for production
 */
app_1.default.use(errorhandler_1.default());
/**
 * Start Express server.
 */
var port = process.argv[2];
var server = app_1.default.listen(port, function () {
    // tslint:disable-next-line:no-console
    console.log("  App is running at http://localhost:%d in %s mode", app_1.default.get("port"), app_1.default.get("env"));
    // tslint:disable-next-line:no-console
    console.log("  Press CTRL-C to stop\n");
});
exports.default = server;

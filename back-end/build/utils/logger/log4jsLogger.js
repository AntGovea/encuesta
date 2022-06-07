"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var log4js_1 = require("log4js");
var log4jsConfig_1 = __importDefault(require("@config/log4js/log4jsConfig"));
try {
    (0, log4js_1.configure)(log4jsConfig_1.default);
}
catch (error) {
    console.log(error);
}
var log4jsLogger = (0, log4js_1.getLogger)();
exports.default = log4jsLogger;

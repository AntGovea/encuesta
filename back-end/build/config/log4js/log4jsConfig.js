"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var auxdirname = __dirname.split(process.env.NODE_ENV === "development" ? "\\" : "/");
auxdirname.pop();
var basePath = auxdirname.join("/");
var logPath = path_1.default.resolve(basePath, "log");
var log4jsConfig = {
    appenders: {
        // app: { type: "file", filename: "app.log" },
        out: { type: "stdout" },
        multi: {
            type: "multiFile",
            base: logPath,
            property: "categoryName",
            extension: ".log",
            maxLogSize: 1024 * 10,
            backup: 3,
            compress: true,
        }
    },
    categories: {
        default: {
            appenders: ["out"],
            level: "info",
            replaceConsole: false
        },
    },
};
exports.default = log4jsConfig;

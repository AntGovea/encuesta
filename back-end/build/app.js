"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Librerías necesarias para iniciar el servidor
 */
var path_1 = __importDefault(require("path"));
require("dotenv").config({ path: path_1.default.resolve(__dirname, ".env") });
require("module-alias/register");
var Server_1 = __importDefault(require("@models/Server"));
var server = new Server_1.default();
server.listen();

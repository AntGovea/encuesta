"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var log4jsLogger_1 = __importDefault(require("@utils/logger/log4jsLogger"));
var routers_1 = require("@routers/routers");
var initializeRoutes = function (app, baseAPIPath) {
    try {
        app.use(baseAPIPath + "/preguntas", routers_1.preguntasRoutes);
    }
    catch (error) {
        log4jsLogger_1.default.error("Error al inicializar las rutas de los routers: ", error);
    }
    return app;
};
exports.default = initializeRoutes;

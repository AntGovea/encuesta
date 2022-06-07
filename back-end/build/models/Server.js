"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * ThirdParty Node.js Libraries
 */
var express = require("express");
var cors = require("cors");
var log4jsLogger_1 = __importDefault(require("@utils/logger/log4jsLogger"));
var initializeRoutes_1 = __importDefault(require("@routes/initializeRoutes"));
/*
 * ExpressApp Server Main Class
 */
var Server = /** @class */ (function () {
    /*
     * Initializes the ExpressApp Server
     */
    function Server() {
        /*
         * Server Class Properties
         */
        this.app = express(); // ExpressApp Instance
        // ExpressApp Middlewares
        this.middlewares();
        // Base API Path
        this.baseAPIPath = "/api";
        // ExpressApp HTTP LISTENING PORT
        this.PORT = process.env.PORT || process.env.PORT + "1";
        // ExpressApp Middlewares
        this.middlewares();
        this.app = (0, initializeRoutes_1.default)(this.app, this.baseAPIPath);
    }
    /*
     * Configures the Middlewares that enpoints will use before performing it's action
     */
    Server.prototype.middlewares = function () {
        // CORS Configuration
        this.app.use(cors());
        // this.app.use(morgan('dev'))
        // Request JSON Body Maximum Size Limit
        this.app.use(express.json({ limit: "15mb" }));
        // Request URLEncoded Maximum Size Limit
        this.app.use(express.urlencoded({ limit: "15mb", extended: true }));
        // Public Directory
        // this.app.use(express.static(path.resolve(__dirname, "..", "..", "build")));
        // JWT Authorization
        // this.app.use(jwtConfig);
    };
    /*
     * Starts the Server on the specified port
     */
    Server.prototype.listen = function () {
        var _this = this;
        try {
            this.app.listen(this.PORT, function () {
                //  logger.info("Generando Basic Authorization Token de SrPago");
                //  process.env.SRPAGO_BASIC_AUTHORIZATION_TOKEN = "Basic " + Buffer.from(`${process.env.SRPAGO_PRIVATE_DEV_KEY} ${process.env.SRPAGO_SECRET_KEY}`).toString("base64");
                log4jsLogger_1.default.info("Servidor de ".concat(process.env.NODE_ENV, " corriendo en el puerto ") + _this.PORT);
            });
        }
        catch (error) {
            log4jsLogger_1.default.error("error listening port: ", error);
        }
    };
    return Server;
}());
/**
 * How to import: import Server from "@models/Server";
 */
exports.default = Server;

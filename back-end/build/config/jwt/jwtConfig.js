"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var jwtSecretKey_1 = __importDefault(require("./jwtSecretKey"));
var jwtConfig = function (req, res, next) {
    var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader != "undefined") {
        var bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
    }
    else {
        res.end();
    }
    jwt.verify(req.token, jwtSecretKey_1.default, function (error, authData) {
        if (error) {
            res.sendStatus(403).end(); // sendStatus(403);
        }
        else {
            //  logger.info("Access Token Verified");
            next();
        }
    });
};
exports.default = jwtConfig;

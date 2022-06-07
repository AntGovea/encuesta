import express = require("express");
import jwt = require("jsonwebtoken");
import secretKey from "./jwtSecretKey";

const jwtConfig = (req: express.Request, res: express.Response, next: express.NextFunction) => {

    const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader != "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];

        req.token = bearerToken;
    } else {
        res.end();
    }

    jwt.verify(req.token, secretKey, (error, authData) => {
        if (error) {
            res.sendStatus(403).end(); // sendStatus(403);
        } else {
            //  logger.info("Access Token Verified");

            next();
        }
    });
};

export default jwtConfig;
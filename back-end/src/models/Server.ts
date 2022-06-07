/*
 * Built-in Node.js Libraries
 */
import path from "path";

/*
 * ThirdParty Node.js Libraries
 */
import express = require("express");
import cors = require("cors");
// var morgan = require('morgan')

/*
 * Own Node.js Libraries
 */
import jwtConfig from "@config/jwt/jwtConfig";
import log4jsLogger from "@utils/logger/log4jsLogger";
import initializeRoutes from "@routes/initializeRoutes";

/*
 * ExpressApp Server Main Class
 */
class Server {
    /*
     * Server Class Properties
     */
	app: express.Application = express(); // ExpressApp Instance
	PORT: string; // ExpressApp PORT
    baseAPIPath: string;


    /*
     * Initializes the ExpressApp Server
     */    
	constructor() {
        // ExpressApp Middlewares
		this.middlewares();
        // Base API Path
        this.baseAPIPath = "/api";

        // ExpressApp HTTP LISTENING PORT
		this.PORT = process.env.PORT || process.env.PORT + "1";

        // ExpressApp Middlewares
		this.middlewares();
        
        this.app = initializeRoutes(this.app, this.baseAPIPath);
	}

    /*
     * Configures the Middlewares that enpoints will use before performing it's action
     */
	middlewares() {
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
	}

    /*
     * Starts the Server on the specified port
     */
	listen() {
		try {
			this.app.listen(this.PORT, () => {
				//  logger.info("Generando Basic Authorization Token de SrPago");

				//  process.env.SRPAGO_BASIC_AUTHORIZATION_TOKEN = "Basic " + Buffer.from(`${process.env.SRPAGO_PRIVATE_DEV_KEY} ${process.env.SRPAGO_SECRET_KEY}`).toString("base64");

				log4jsLogger.info(`Servidor de ${process.env.NODE_ENV} corriendo en el puerto ` + this.PORT);
                
			});
		} catch (error) {
            log4jsLogger.error("error listening port: ", error);
		}
	}
}

/**
 * How to import: import Server from "@models/Server";
 */
export default Server;
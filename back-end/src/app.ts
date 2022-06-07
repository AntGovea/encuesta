
/**
 * Librerías necesarias para iniciar el servidor
 */
import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

import "module-alias/register";
import Server from "@models/Server";


const server = new Server();

server.listen();

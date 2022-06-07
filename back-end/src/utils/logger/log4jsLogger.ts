import { configure, getLogger } from "log4js";
import log4jsConfig from "@config/log4js/log4jsConfig";

try {
	configure(log4jsConfig);
} catch (error) {
	console.log(error);
}

const log4jsLogger = getLogger();

export default log4jsLogger;


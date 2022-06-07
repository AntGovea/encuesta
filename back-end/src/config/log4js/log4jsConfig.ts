import path from "path";

let auxdirname = __dirname.split(process.env.NODE_ENV === "development" ? "\\" : "/");

auxdirname.pop();

let basePath = auxdirname.join("/");

let logPath = path.resolve(basePath, `log`);

const log4jsConfig = {
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

export default log4jsConfig;
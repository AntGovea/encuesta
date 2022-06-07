/**
 * JSON que contiene los correos destino de todos los comprobantes
 */
const correos: Correo = {
	desarrollo: "gc.desarrollo@outlook.com",
	validacion: "validacion@globalclickmexico.com",
	logistica: "logistica@globalclickmexico.com",
	cobranza: "cobranza@globalclickmexico.com",
	gerencia: "leonardo@globalclickmexico.com",
	administracion: "gcadmon@outlook.com",
};

/**
 * JSON que contiene la configuración del mailer para envío de correos
 */
const mailerAuth: MailerAuthEnvironment = {
	development: {
		// host: "smtp.gmail.com",
		service: "gmail",
		port: 465,
		secure: true,
		auth: {
			user: "desarrollo.globalclickmexico@gmail.com",
			pass: "skyper1232152",
		},
	},
	production: {
		// host: "smtp.office365.com",
		service: "Outlook365",
		port: 587,
		secure: true,
		auth: {
			user: "notificaciones@globalclickmexico.com",
			pass: "Notificaciones2021@",
		},
		// secureConnection: true,
		// tls: {
		// 	ciphers: "SSLv3"
		// }
	},
};

/**
 * Función que regresa el correo que coincida con el nombre
 * de departamento pasado por parámetro en el JSON de correos
 */
export const getCorreoGC: Function = (department: string): string => {
	let correo: string = "";
	let value: keyof Correo;

	for (value in correos) {
		if (value == department) {
			correo = correos[value];
		}
	}

	return correo;
};

/**
 * Función que regresa la configuración del mailer dependiendo
 * del ambiente de ejecución de la aplicación
 */
export const getMailerAuth: Function = (): MailerAuth => {
	let mailerAuthInfo: MailerAuth = {
		host: "",
		port: 0,
		secure: false,
		auth: {
			user: "",
			pass: "",
		},
	};
	let value: keyof MailerAuthEnvironment;

	for (value in mailerAuth) {
		if (value == process.env.NODE_ENV) {
			mailerAuthInfo = mailerAuth[value];
		}
	}

	return mailerAuthInfo;
};

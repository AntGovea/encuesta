declare type Correo = {
	desarrollo: string;
	validacion: string;
	logistica: string;
	cobranza: string;
	gerencia: string;
	administracion: string;
};

declare type Auth = {
	user: string;
	pass: string;
};

declare type MailerAuth = {
	service?: string;
	host?: string;
	port: number;
	secure?: boolean;
	auth: Auth;
	secureConnection?: boolean;
	tls?: {
		ciphers: string;
	}
};

declare type MailerAuthEnvironment = {
	development: MailerAuth;
	production: MailerAuth;
};

declare type HandlebarsReplacements = {
    [key: string]: any;
};
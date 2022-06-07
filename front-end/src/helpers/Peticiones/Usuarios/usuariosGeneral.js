import { rutas } from "@helpers/RutasYDirecciones/RutasYDirecciones";
import { getUrlBackEnd } from "config/config";

let url = getUrlBackEnd();

const getUsuarios = async () => {
	try {
		console.log(`${url}${rutas.usuarios}/wusuario/getAll`);

		let resp = await fetch(`${url}usuarios/getAll`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const json = await resp.json();
		// console.log(json)
		return json;
	} catch (err) {
		console.log("Error al consultar las preguntas de la base de datos");
		console.log(err.message);
	}
};

const getGrupos = async () => {
	try {
		console.log(`${url}grupos/getAll`);

		let resp = await fetch(`${url}grupos/getAll`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const json = await resp.json();
		// console.log(json)
		return json;
	} catch (err) {
		console.log("Error al consultar grupos/getAll");
		console.log(err.message);
	}
};

const getDataUserLogged = async (idCredencial, tipoUsuario) => {
	try {
		console.log(`${url}usuarios/getUserLogged`);

		let resp = await fetch(`${url}usuarios/getUserLogged`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ idCredencial, tipoUsuario }),
		});

		const json = await resp.json();
		// console.log(json)
		return json;
	} catch (err) {
		console.log("Error al consultar grupos/getAll");
		console.log(err.message);
	}
};

export {
	getUsuarios,
	getGrupos,
	getDataUserLogged
};
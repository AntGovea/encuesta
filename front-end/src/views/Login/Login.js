import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./login.css";

export const Login = ({ history, location }) => {
	//States
	// const [changeComponent, setChangeComponent] = useState(false);
	const [isVectorActive, setIsVectorActive] = useState(false);

	const btnRegistro = () => {
		setIsVectorActive(true);
	};

	const btnIngreso = () => {
		setIsVectorActive(false);
	};

	return (
		<>
			{/* ---------------------------- Formularios ---------------------------- */}
			<Container fluid style={{ zIndex: "10", position: "absolute" }}>
				<Row>
					{/* ---------------------------- Form Validar folio y correo empresarial ---------------------------- */}
					<Col>
						<Container fluid className="form">
						
						</Container>
					</Col>
					{/* ---------------------------- Form Iniciar sesión ---------------------------- */}
					<Col>
						<Container fluid className="form">
						
						</Container>
					</Col>
				</Row>
			</Container>

			{/* ---------------------------- Vector ---------------------------- */}
			<Container
				fluid
				className={`vectorAzul bg-info d-none d-md-block ${
					isVectorActive ? "animateL" : "animateR"
				}`}
			>
				
			</Container>

			{/* ---------------------------- Paneles informativos ---------------------------- */}
			<Container fluid className="d-none d-md-block paneles">
				{/* ---------------------------- Panel izquierdo ---------------------------- */}
				<Container
					fluid
					className={`panel ${isVectorActive ? "fadeIn" : "d-none"}`}
					style={{ left: "0px" }}
				>
					<Row>
						<Col>
							<h3 className="text-warning">Iniciar sesión</h3>
							<p className="text-white">
								Retoma tu aprendizaje o comienza con una nueva ruta, <br />
								¿Estás listo?
							</p>
							<Button variant="warning" onClick={btnIngreso}>
								Ingresar
							</Button>
						</Col>
					</Row>
				</Container>
				{/* ---------------------------- Panel derecho ---------------------------- */}
				<Container
					fluid
					className={`panel ${isVectorActive ? "d-none" : "fadeIn"}`}
					style={{ right: "0px" }}
				>
					<Row>
						<Col>
							<h3 className="text-warning">Registra tu Cuenta Empresarial</h3>
							<br />
							<p className="text-white">
								{" "}
								Si ya cuentas con las credenciales del titular, puedes acceder
								al formulario de registro y ¡comenzar ahora!
							</p>
							<Button variant="warning" onClick={btnRegistro}>
								Registrarme
							</Button>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
};

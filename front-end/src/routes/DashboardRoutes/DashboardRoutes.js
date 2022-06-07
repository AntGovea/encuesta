import { Formulario } from "@components/Formulario";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

export const DashboardRoutes = () => {
	return (
		<div>
			<Switch>
				{/* Rutas Publicas */}
			
				<Route exact path="/formulario" component={Formulario} />
				{/* Rutas Privadas */}
				<Route  path="/" component={Dashboard} />

				<Redirect to="/login" />
			</Switch>
		</div>
	);
};

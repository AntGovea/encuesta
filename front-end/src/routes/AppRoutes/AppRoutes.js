import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Formulario } from "../../components/Formulario";
import { Inicio } from "../../components/Inicio";


export const AppRoutes = () => {
 
  return (
    // aqui se carga la informacion en el "useContext el dual es un hook para compartir la inormacion de sus hijos al padre"
    // en este caso se le pasa un state y el setState para obtener t mosificar los valores
   

        <Router>

          <Switch>

            <Route path="/formulario" component={Formulario} />

            <Route path="/" component={Inicio} />

          </Switch>

        </Router>

      
  );
};

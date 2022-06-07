import React from "react";
import ReactDOM from "react-dom";
import { AppRoutes } from "./routes/AppRoutes/AppRoutes";

const divRoot = document.getElementById("root");

ReactDOM.render(
	<React.StrictMode>
		<AppRoutes/>
	</React.StrictMode>,
	divRoot
);

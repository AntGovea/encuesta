import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { SiderBarCollapse } from "@components/SideBarCollapse/SideBarCollapse";
import { MultiViewContext } from "@components/UseContext/UseContext";

import { NavBar } from "@containers/NavBar/NavBar";

import "@containers/containers.css";

export const Dashboard = ({ history }) => {
	const [state, setState] = useState({
		direccion: "dashboard",
	});
	const [active, setActive] = useState(false);

	return (
	
			<Container fluid>
				<Row>
				
				</Row>
			
			</Container>
	
	);
};

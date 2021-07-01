import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavBar: React.FC<{}> = () => {
	return (
		<Navbar bg="primary" variant="dark" sticky="top">
			<Container>
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>text right</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;

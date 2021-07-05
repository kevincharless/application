import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar: React.FC<{}> = () => {
	return (
		<Navbar bg="primary" variant="dark" sticky="top">
			<Container>
				<Link to="/">
					<Navbar.Brand>Application</Navbar.Brand>
				</Link>

				<Navbar.Toggle />
				{/* <Navbar.Collapse className="justify-content-end">
					<Navbar.Text>text right</Navbar.Text>
				</Navbar.Collapse> */}
				<Nav className="me-auto">
					<Link to="/create-post">
						<Button variant="light">Create Post</Button>
					</Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;

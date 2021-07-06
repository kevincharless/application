import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";

const NavBar: React.FC<{}> = () => {
	const [showSidebar, setShowSidebar] = useState(true);

	useEffect(() => {
		if (localStorage.getItem("sb|sidebar-toggle") === "true") {
			document.body.classList.toggle("sb-sidenav-toggled");
			setShowSidebar(false);
		}
	}, []);

	const handleSidebar = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		event.preventDefault();
		document.body.classList.toggle("sb-sidenav-toggled");
		localStorage.setItem(
			"sb|sidebar-toggle",
			document.body.classList.contains("sb-sidenav-toggled").toString(),
		);
		setShowSidebar(!showSidebar);
	};

	return (
		<Navbar className="bg-white" sticky="top">
			<Container fluid className="mx-2">
				<Button
					className="button p-2 d-flex align-items-center rounded-circle"
					size="lg"
					onClick={(e) => handleSidebar(e)}
				>
					{showSidebar ? <RiMenuFoldLine /> : <RiMenuUnfoldLine />}
				</Button>

				<NavbarBrand
					className="mx-auto font-weight-bold"
					style={{ color: "#2a58ae" }}
				>
					Application
				</NavbarBrand>

				<Nav className="me-auto">
					<Link to="/">
						<Button className="button-outline">logout</Button>
					</Link>
				</Nav>

				<Navbar.Toggle />
			</Container>
		</Navbar>
	);
};

export default NavBar;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import { SideBar } from "./SideBar";

const Layout: React.FC<{}> = ({ children }) => {
	return (
		<>
			{/* <NavBar />
			<Container className="mt-4"></Container> */}
			<div className="d-flex" id="wrapper">
				<SideBar />
				<div className="bg-light" id="page-content-wrapper">
					{/* Top navigation */}
					{/* <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
						<div className="container-fluid">
							<button className="btn btn-primary" id="sidebarToggle">
								Toggle Menu
							</button>
						</div>
					</nav> */}
					<NavBar />
					{/* Page content */}
					<Container fluid className="bg-light">
						{children}
					</Container>
				</div>
			</div>
		</>
	);
};

export default Layout;

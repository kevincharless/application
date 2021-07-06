import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import { SideBar } from "./SideBar";

const Layout: React.FC<{}> = ({ children }) => {
	return (
		<>
			<div className="d-flex" id="wrapper">
				<SideBar />
				<div className="bg-light" id="page-content-wrapper">
					<NavBar />
					<Container fluid className="children-container p-5 bg-light">
						{children}
					</Container>
				</div>
			</div>
		</>
	);
};

export default Layout;

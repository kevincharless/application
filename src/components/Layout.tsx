import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";

const Layout: React.FC<{}> = ({ children }) => {
	return (
		<>
			<NavBar />
			<Container className="mt-4">{children}</Container>
		</>
	);
};

export default Layout;

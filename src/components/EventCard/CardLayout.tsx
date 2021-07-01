import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

interface CardLayoutProps {
	position: "Top" | "Mid" | "Bottom";
	icon?: any;
	rightIcon?: any;
	hasRightIcon?: Boolean;
}

const CardLayout: React.FC<CardLayoutProps> = ({
	position,
	icon,
	rightIcon,
	children,
	hasRightIcon = false,
}) => {
	return (
		<Card.Body
			className={
				position === "Top" ? "pb-0" : position === "Mid" ? "py-2" : "pt-0"
			}
		>
			<Row>
				<Col xs={1}>{icon}</Col>
				{!hasRightIcon ? (
					<Col xs={11}>{children}</Col>
				) : (
					<>
						<Col xs={10}>{children}</Col>
						<Col xs={1}>{rightIcon}</Col>
					</>
				)}
			</Row>
		</Card.Body>
	);
};

export default CardLayout;

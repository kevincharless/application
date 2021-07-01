import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { RiCalendarEventLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { VscEdit } from "react-icons/vsc";
import CardLayout from "./CardLayout";

interface Time {
	start: String;
	end: String;
}

interface EventCardProps {
	title: String;
	location: String;
	participants: { name: String; picture: String }[];
	date: String;
	time: Time;
	notes: String;
	createdBy: String;
}

const EventCard: React.FC<EventCardProps> = ({
	title,
	location,
	participants,
	date,
	time,
	notes,
	createdBy,
}) => {
	return (
		<Card className="my-4" style={{ width: "30rem" }}>
			<CardLayout
				position="Top"
				hasRightIcon={true}
				icon={<RiCalendarEventLine />}
				rightIcon={
					<VscEdit className="text-primary" style={{ cursor: "pointer" }} />
				}
			>
				{date} - {time.start} to {time.end}
			</CardLayout>
			<CardLayout position="Mid">
				<Card.Title>{title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					Location :&nbsp;
					<div className="text-primary d-inline-block font-weight-bold">
						{location}
					</div>
				</Card.Subtitle>
			</CardLayout>
			<CardLayout position="Mid" icon={<BsPeople />}>
				<Row className="ml-0">
					{participants.length === 0 ? (
						<div>no participant</div>
					) : (
						participants.map((participant, index) => (
							<Col lg={4} key={index} className="p-1">
								<div className="p-1 mb-2 border rounded-pill d-flex align-items-center">
									<Image
										roundedCircle
										src="https://randomuser.me/api/portraits/thumb/women/11.jpg"
										style={{ width: "2rem" }}
									/>
									<div className="mx-1 text-break">
										{participant.name.split(" ")[0]}
									</div>
								</div>
							</Col>
						))
					)}
				</Row>
			</CardLayout>

			<Card.Body className="pt-1">
				<Container className="p-2 border rounded">
					<b>Note: </b>
					{notes}
				</Container>
			</Card.Body>

			<Card.Body className="pt-0">
				<Card.Text>
					<Row>
						<Col>
							Created by <b>{createdBy}</b>
						</Col>
						<Col className="d-flex justify-content-end">
							<Button variant="link text-dark">Cancel</Button>
							<Button className="ml-2 px-4" variant="primary">
								Done
							</Button>
						</Col>
					</Row>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default EventCard;

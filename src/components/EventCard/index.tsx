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
		<Card className="mb-4 h-100" style={{ width: "22rem" }}>
			<CardLayout
				position="Top"
				hasRightIcon={true}
				icon={<RiCalendarEventLine />}
				rightIcon={
					<VscEdit className="button-icon" style={{ cursor: "pointer" }} />
				}
			>
				{date} - {time.start} to {time.end}
			</CardLayout>
			<CardLayout position="Mid">
				<Card.Title>{title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					Location :&nbsp;
					<div
						className="d-inline-block font-weight-bold"
						style={{ color: "#2a58ae" }}
					>
						{location}
					</div>
				</Card.Subtitle>
			</CardLayout>
			<CardLayout position="Mid" icon={<BsPeople className="mt-2" />}>
				<Row className="ml-0">
					{participants.length === 0 ? (
						<div>no participant</div>
					) : (
						participants.map((participant, index) => (
							<Col xs={6} key={index} className="p-1">
								<div className="p-1 mb-2 border rounded-pill d-flex align-items-center">
									<Image
										roundedCircle
										src={participant.picture as string}
										style={{ width: "1.6rem" }}
									/>
									<div
										className="mx-2 text-break"
										style={{ fontSize: "0.8rem" }}
									>
										{participant.name.split(" ")[0]}
									</div>
								</div>
							</Col>
						))
					)}
				</Row>
			</CardLayout>

			<Card.Body className="pt-1 pb-3">
				<Container className="p-2 border rounded">
					<b>Note: </b>
					{notes}
				</Container>
			</Card.Body>

			<Card.Body className="pt-0">
				Created by <b>{createdBy}</b>
				<div className="pt-2 d-flex justify-content-end">
					<Button variant="link text-dark">Cancel</Button>
					<Button className="button ml-2 px-4">Done</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default EventCard;

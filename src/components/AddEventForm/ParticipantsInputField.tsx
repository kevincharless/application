import React, { useEffect, useState } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";

import { Form, Image, Row, Col } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/users";
import { RootState } from "../../redux/store";

interface ParticipantsInputFieldProps {
	icon?: any;
	setParticipant: any;
	onBlur: any;
	isInvalid: any;
	errorFeedback: any;
}

export const ParticipantsInputField: React.FC<ParticipantsInputFieldProps> = ({
	icon,
	setParticipant,
	onBlur,
	isInvalid,
	errorFeedback,
}) => {
	const contacts = useSelector((state: RootState) => state.users.users);
	const [multiSelections, setMultiSelections] = useState<
		{ name: string; picture: string }[] | any[]
	>([]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	useEffect(() => {
		setParticipant(multiSelections);
	}, [setParticipant, multiSelections]);

	return (
		<Form.Group as={Row} className="autoComplete_wrapper">
			<Col className="d-flex justify-content-center p-0 pl-2 pt-2" xs={1}>
				{icon}
			</Col>
			<Col className="pr-0" xs={10}>
				<Typeahead
					multiple
					id="basic-typeahead-multiple"
					className={isInvalid ? "is-invalid" : undefined}
					labelKey="name"
					onChange={setMultiSelections}
					onBlur={onBlur}
					options={contacts}
					placeholder="Choose the participant..."
					selected={multiSelections}
					isInvalid={isInvalid}
					renderMenuItemChildren={(contact) => (
						<Row className="d-flex align-items-center">
							<div className="pr-2">
								<Image
									src={contact.picture}
									roundedCircle
									style={{ width: "2rem" }}
								/>
							</div>
							<div>{contact.name}</div>
						</Row>
					)}
				/>
				<Form.Control.Feedback type="invalid">
					{errorFeedback}
				</Form.Control.Feedback>
			</Col>
		</Form.Group>
	);
};

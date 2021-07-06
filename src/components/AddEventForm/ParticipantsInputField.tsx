import React, { Fragment, useEffect, useState } from "react";
import { Form, Image, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead } from "react-bootstrap-typeahead";

import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/users";
import { RootState } from "../../redux/store";

interface ParticipantsInputFieldProps {
	setParticipant: any;
	onBlur: any;
	isInvalid: any;
	errorFeedback: any;
}

export const ParticipantsInputField: React.FC<ParticipantsInputFieldProps> = ({
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
		<Form.Group as={Col} md="4" className="autoComplete_wrapper">
			<Form.Label>Participants</Form.Label>
			<Typeahead
				renderMenuItemChildren={(contact) => (
					<Fragment>
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
					</Fragment>
				)}
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
			/>
			<Form.Control.Feedback type="invalid">
				{errorFeedback}
			</Form.Control.Feedback>
		</Form.Group>
	);
};

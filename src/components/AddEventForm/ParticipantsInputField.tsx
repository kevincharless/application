import React, { Fragment, useEffect, useState } from "react";
import { Form, Image, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead } from "react-bootstrap-typeahead";

import options from "../../data";

interface ParticipantsInputFieldProps {
	setParticipant: any;
	onBlur: any;
	isValid: any;
	isInvalid: any;
	errorFeedback: any;
}

export const ParticipantsInputField: React.FC<ParticipantsInputFieldProps> = ({
	setParticipant,
	onBlur,
	isValid,
	isInvalid,
	errorFeedback,
}) => {
	const [multiSelections, setMultiSelections] = useState<
		{ name: string; picture: string }[] | any[]
	>([]);

	useEffect(() => {
		setParticipant(multiSelections);
	}, [setParticipant, multiSelections]);

	return (
		<Form.Group as={Col} md="4" className="autoComplete_wrapper">
			<Form.Label>Participants</Form.Label>
			<Typeahead
				renderMenuItemChildren={(option) => (
					<Fragment>
						<Row className="d-flex align-items-center">
							<div className="pr-2">
								<Image
									src={option.picture}
									roundedCircle
									style={{ width: "2rem" }}
								/>
							</div>
							<div>{option.name}</div>
						</Row>
					</Fragment>
				)}
				multiple
				id="basic-typeahead-multiple"
				className={isValid ? "is-valid" : isInvalid ? "is-invalid" : undefined}
				labelKey="name"
				onChange={setMultiSelections}
				onBlur={onBlur}
				options={options}
				placeholder="Choose the participant..."
				selected={multiSelections}
				isValid={isValid}
				isInvalid={isInvalid}
			/>
			<Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
			<Form.Control.Feedback type="invalid">
				{errorFeedback}
			</Form.Control.Feedback>
		</Form.Group>
	);
};

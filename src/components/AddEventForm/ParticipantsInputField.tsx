import React, { Fragment, useState } from "react";
import { Form, Image, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Highlighter, Typeahead } from "react-bootstrap-typeahead";

import options from "./data";
import { RiDivideFill } from "react-icons/ri";

interface ParticipantsInputFieldProps {
	onChange: any;
	onBlur: any;
	value: any;
	isValid: any;
	isInvalid: any;
	errorFeedback: any;
}

export const ParticipantsInputField: React.FC<ParticipantsInputFieldProps> = ({
	onChange,
	onBlur,
	value,
	isValid,
	isInvalid,
	errorFeedback,
}) => {
	const [multiSelections, setMultiSelections] = useState<
		{ name: string; picture: string }[] | any[]
	>([]);

	return (
		<Form.Group as={Col} md="4" className="autoComplete_wrapper">
			<Form.Label>Participants</Form.Label>
			<Typeahead
				renderMenuItemChildren={(option, { text }, index) => (
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
				id="basic-typeahead-multiple"
				labelKey="name"
				multiple
				onChange={setMultiSelections}
				options={options}
				placeholder="Choose several states..."
				selected={multiSelections}
			/>
			<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			<Form.Control.Feedback type="invalid">
				{errorFeedback}
			</Form.Control.Feedback>
		</Form.Group>
	);
};

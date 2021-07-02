import React, { useState } from "react";
import { Row, Col, InputGroup, Button, Form } from "react-bootstrap";

const AddEventForm: React.FC<{}> = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event: any) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			<Form.Group as={Col} md="4" controlId="validationCustom01">
				<Form.Label>Title</Form.Label>
				<Form.Control required type="text" placeholder="Title" />
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">
					Please provide a valid title.
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group as={Col} md="4" controlId="validationCustom01">
				<Form.Label>Location</Form.Label>
				<Form.Control required type="text" placeholder="Location" />
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">
					Please provide a valid location.
				</Form.Control.Feedback>
			</Form.Group>

			<Form.Group as={Col} md="4" controlId="validationCustom01">
				<Form.Label>Participant</Form.Label>
				<Form.Control required type="text" placeholder="Participant" />
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">
					Please provide a valid participant.
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group as={Col} md="4" controlId="validationCustom01">
				<Form.Label>Date</Form.Label>
				<Form.Control required type="text" placeholder="Date" />
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">
					Please provide a valid date.
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group as={Col} md="4" controlId="validationCustom01">
				<Form.Label>Notes</Form.Label>
				<Form.Control required type="text" placeholder="Notes" />
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">
					Please provide a valid notes.
				</Form.Control.Feedback>
			</Form.Group>

			<Button type="submit">Submit form</Button>
		</Form>
	);
};

export default AddEventForm;

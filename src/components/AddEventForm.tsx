import React, { FormEvent, HTMLAttributes, useState } from "react";
import { Row, Col, InputGroup, Button, Form } from "react-bootstrap";

const AddEventForm: React.FC<{}> = () => {
	const [validated, setValidated] = useState(false);
	const [formData, setFormData] = useState({
		title: "",
		location: "",
		participant: "",
		date: "",
		notes: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	console.log(validated);
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
			<Form.Group as={Col} md="4">
				<Form.Label>Title</Form.Label>
				<Form.Control
					required
					type="text"
					placeholder="Title"
					name="title"
					onChange={(e) =>
						handleChange(e as React.ChangeEvent<HTMLInputElement>)
					}
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">
					Please provide a valid title.
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group as={Col} md="4">
				<Form.Label>Location</Form.Label>
				<Form.Control
					required
					type="text"
					placeholder="Location"
					name="location"
					onChange={(e) =>
						handleChange(e as React.ChangeEvent<HTMLInputElement>)
					}
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">
					Please provide a valid location.
				</Form.Control.Feedback>
			</Form.Group>

			<Form.Group as={Col} md="4">
				<Form.Label>Participant</Form.Label>
				<Form.Control
					required
					type="text"
					placeholder="Participant"
					name="participant"
					onChange={(e) =>
						handleChange(e as React.ChangeEvent<HTMLInputElement>)
					}
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">
					Please provide a valid participant.
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group as={Col} md="4">
				<Form.Label>Date</Form.Label>
				<Form.Control
					required
					type="date"
					placeholder="Date"
					name="date"
					onChange={(e) =>
						handleChange(e as React.ChangeEvent<HTMLInputElement>)
					}
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">
					Please provide a valid date.
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group as={Col} md="4">
				<Form.Label>Notes</Form.Label>
				<Form.Control
					required
					// isInvalid={notesValidated}
					as="textarea"
					type="text"
					placeholder="Notes"
					style={{ height: "100px" }}
					name="notes"
					onChange={(e) =>
						handleChange(e as React.ChangeEvent<HTMLInputElement>)
					}
				/>

				<Form.Control.Feedback type="invalid">
					Notes should be longer than 50 characters
				</Form.Control.Feedback>
			</Form.Group>

			<Button type="submit">Submit form</Button>
		</Form>
	);
};

export default AddEventForm;

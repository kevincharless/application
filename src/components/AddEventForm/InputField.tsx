import React from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";

interface InputFieldProps {
	textarea?: boolean;
	label: string;
	type: string;
	placeholder: string;
	name: string;
	onChange: any;
	onBlur: any;
	value: any;
	isValid: any;
	isInvalid: any;
	errorFeedback: any;
}

const InputField: React.FC<InputFieldProps> = ({
	textarea = false,
	label,
	type,
	placeholder,
	name,
	onChange,
	onBlur,
	value,
	isValid,
	isInvalid,
	errorFeedback,
}) => {
	return (
		<Form.Group as={Col} md="4">
			<Form.Label>{label}</Form.Label>
			<Form.Control
				as={textarea ? "textarea" : undefined}
				required
				type={type}
				placeholder={placeholder}
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				isValid={isValid}
				isInvalid={isInvalid}
				style={{ height: textarea ? "100px" : undefined }}
			/>
			<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			<Form.Control.Feedback type="invalid">
				{errorFeedback}
			</Form.Control.Feedback>
		</Form.Group>
	);
};

export default InputField;

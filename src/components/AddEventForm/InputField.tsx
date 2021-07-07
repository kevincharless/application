import React from "react";
import { Form, Col, Row } from "react-bootstrap";

interface InputFieldProps {
	textarea?: boolean;
	type: string;
	placeholder: string;
	name: string;
	styleClassName?: string;
	label?: string;
	icon?: any;
	onChange: any;
	onBlur: any;
	value: any;
	isInvalid: any;
	errorFeedback: any;
}

const InputField: React.FC<InputFieldProps> = ({
	textarea = false,
	type,
	placeholder,
	name,
	styleClassName,
	label,
	icon,
	onChange,
	onBlur,
	value,
	isInvalid,
	errorFeedback,
}) => {
	return (
		<Form.Group className="mb-2" as={Row}>
			<Col className="d-flex justify-content-center p-0 pl-2 pt-2" xs={1}>
				{icon}
			</Col>
			<Col className="pr-0" xs={10}>
				{!label ? null : (
					<p
						className="m-0 font-weight-bolder"
						style={{ color: "#808080", fontSize: "0.9rem" }}
					>
						{label}
					</p>
				)}
				<Form.Control
					as={textarea ? "textarea" : undefined}
					required
					type={type}
					placeholder={placeholder}
					name={name}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
					isInvalid={isInvalid}
					style={{ height: textarea ? "100px" : undefined }}
					className={styleClassName}
				/>
				<Form.Control.Feedback type="invalid">
					{errorFeedback}
				</Form.Control.Feedback>
			</Col>
		</Form.Group>
	);
};

export default InputField;

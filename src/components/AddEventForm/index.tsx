import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import React, { FormEvent, HTMLAttributes, useState } from "react";
import { Row, Col, InputGroup, Button, Form } from "react-bootstrap";
import InputField from "./InputField";

const AddEventForm: React.FC<{}> = () => {
	const formik = useFormik({
		initialValues: {
			title: "",
			location: "",
			participant: "",
			date: "",
			notes: "",

			firstName: "",
			lastName: "",
			email: "",
		},
		validationSchema: Yup.object({
			title: Yup.string().required("Title is Required"),
			location: Yup.string().required("Location is Required"),
			participant: Yup.string().required("Participant is Required"),
			date: Yup.string().required("Date is Required"),
			notes: Yup.string()
				.min(50, "Must be at least 50 characters")
				.required("Date is Required"),
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<Form noValidate onSubmit={formik.handleSubmit}>
			<InputField
				label="Title"
				type="text"
				placeholder="Title"
				name="title"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.title}
				isValid={formik.touched.title && !formik.errors.title}
				isInvalid={!!formik.errors.title}
				errorFeedback={formik.errors.title}
			/>
			<InputField
				label="Location"
				type="text"
				placeholder="Location"
				name="location"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.location}
				isValid={formik.touched.location && !formik.errors.location}
				isInvalid={!!formik.errors.location}
				errorFeedback={formik.errors.location}
			/>
			<InputField
				label="Participant"
				type="text"
				placeholder="Participant"
				name="participant"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.participant}
				isValid={formik.touched.participant && !formik.errors.participant}
				isInvalid={!!formik.errors.participant}
				errorFeedback={formik.errors.participant}
			/>
			<InputField
				label="Date"
				type="date"
				placeholder="Date"
				name="date"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.date}
				isValid={formik.touched.date && !formik.errors.date}
				isInvalid={!!formik.errors.date}
				errorFeedback={formik.errors.date}
			/>
			<InputField
				textarea
				label="Notes"
				type="text"
				placeholder="Notes"
				name="notes"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.notes}
				isValid={formik.touched.notes && !formik.errors.notes}
				isInvalid={!!formik.errors.notes}
				errorFeedback={formik.errors.notes}
			/>

			<Button type="submit">Submit form</Button>
		</Form>
	);
};

export default AddEventForm;

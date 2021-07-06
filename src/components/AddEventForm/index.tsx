import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { createPost } from "../../redux/actions/posts";
import InputField from "./InputField";
import { ParticipantsInputField } from "./ParticipantsInputField";

const AddEventForm: React.FC<{}> = () => {
	const [participants, setParticipants] = useState([]);
	const dispatch = useDispatch();
	const history = useHistory();

	const showdate = (eventDate: string) => {
		let months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sept",
			"Oct",
			"Nov",
			"Dec",
		];

		var date = new Date(eventDate);
		var month = months[date.getMonth()];
		//converting the date into array
		var dateArr = eventDate.split("-");
		//setting up the new date form
		var convertedDate = dateArr[2] + "/" + month + "/" + dateArr[0].slice(-2);

		return convertedDate;
	};

	const formik = useFormik({
		initialValues: {
			title: "",
			location: "",
			participants: [],
			date: "",
			time: {
				start: "",
				end: "",
			},
			notes: "",
			createdBy: "Zara Jackson",
		},
		validationSchema: Yup.object({
			title: Yup.string().required("Title is Required"),
			location: Yup.string().required("Location is Required"),
			participants: Yup.array().min(1, "Participant is Required"),
			date: Yup.string().required("Date is Required"),
			time: Yup.object()
				.shape({
					start: Yup.string().required("Start Time is Required"),
					end: Yup.string().required("End Time is Required"),
				})
				.required("Event Time is Required"),
			notes: Yup.string()
				.min(50, "Must be at least 50 characters")
				.required("Date is Required"),
		}),
		onSubmit: (values) => {
			values.date = showdate(values.date);
			dispatch(createPost(values));
			history.push("/");
			window.scrollTo(0, 0);
		},
	});

	useEffect(() => {
		formik.values.participants = participants;
	}, [formik.values, participants]);

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

			<ParticipantsInputField
				setParticipant={setParticipants}
				onBlur={formik.handleBlur}
				isValid={formik.touched.participants && !formik.errors.participants}
				isInvalid={!!formik.errors.participants}
				errorFeedback={formik.errors.participants}
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
				label="Event Start Time"
				type="time"
				placeholder="Event start time"
				name="time.start"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.time.start}
				isValid={formik.touched.time?.start && !formik.errors.time?.start}
				isInvalid={!!formik.errors.time?.start}
				errorFeedback={formik.errors.time?.start}
			/>
			<InputField
				label="Event End Time"
				type="time"
				placeholder="Event end time"
				name="time.end"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.time.end}
				isValid={formik.touched.time?.end && !formik.errors.time?.end}
				isInvalid={!!formik.errors.time?.end}
				errorFeedback={formik.errors.time?.end}
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

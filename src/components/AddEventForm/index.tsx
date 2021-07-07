import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { createPost } from "../../redux/actions/posts";
import InputField from "./InputField";
import { ParticipantsInputField } from "./ParticipantsInputField";

import {
	IoLocationOutline,
	IoPeopleOutline,
	IoTimeOutline,
} from "react-icons/io5";
import { VscNote } from "react-icons/vsc";

const AddEventForm: React.FC<{}> = () => {
	const [participants, setParticipants] = useState([]);
	const [show, setShow] = useState(false);

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
			setShow(true);
			setTimeout(() => {
				setShow(false);
				history.push("/");
				window.scrollTo(0, 0);
			}, 2000);
		},
	});

	useEffect(() => {
		formik.values.participants = participants;
	}, [formik.values, participants]);

	return (
		<div className="d-flex justify-content-center">
			<Card style={{ width: "22rem" }}>
				<Card.Body>
					<Form noValidate onSubmit={formik.handleSubmit}>
						<InputField
							type="text"
							placeholder="Add title"
							name="title"
							styleClassName="add-title pl-1"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.title}
							isInvalid={!!formik.errors.title}
							errorFeedback={formik.errors.title}
						/>
						<InputField
							type="text"
							placeholder="Location"
							name="location"
							icon={<IoLocationOutline />}
							styleClassName="input-items pl-1"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.location}
							isInvalid={!!formik.errors.location}
							errorFeedback={formik.errors.location}
						/>

						<ParticipantsInputField
							icon={<IoPeopleOutline />}
							setParticipant={setParticipants}
							onBlur={formik.handleBlur}
							isInvalid={!!formik.errors.participants}
							errorFeedback={formik.errors.participants}
						/>
						<InputField
							type="date"
							placeholder="Date"
							name="date"
							icon={<IoTimeOutline />}
							styleClassName="input-items pl-1"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.date}
							isInvalid={!!formik.errors.date}
							errorFeedback={formik.errors.date}
						/>
						<Row className="pl-3">
							<Col xs={6}>
								<InputField
									type="time"
									placeholder="Event start time"
									name="time.start"
									label="Start Time"
									styleClassName="input-items pl-1"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.time.start}
									isInvalid={!!formik.errors.time?.start}
									errorFeedback={formik.errors.time?.start}
								/>
							</Col>
							<Col xs={6}>
								<InputField
									type="time"
									placeholder="Event end time"
									name="time.end"
									label="End Time"
									styleClassName="input-items pl-1"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.time.end}
									isInvalid={!!formik.errors.time?.end}
									errorFeedback={formik.errors.time?.end}
								/>
							</Col>
						</Row>
						<InputField
							textarea
							type="text"
							placeholder="Notes"
							name="notes"
							icon={<VscNote />}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.notes}
							isInvalid={!!formik.errors.notes}
							errorFeedback={formik.errors.notes}
						/>
						<div className="d-flex justify-content-end pt-2">
							<Button className="button" type="submit">
								Submit form
							</Button>
						</div>
					</Form>
				</Card.Body>
			</Card>

			<Modal
				className="bg-transparent"
				show={show}
				backdrop="static"
				keyboard={false}
			>
				<Alert className="p-fixed m-0" show={show} variant="success">
					<Alert.Heading>Event schedule</Alert.Heading>
					<p>Your schedule has been created successfully.</p>
				</Alert>
			</Modal>
		</div>
	);
};

export default AddEventForm;

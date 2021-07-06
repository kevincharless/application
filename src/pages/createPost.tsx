import React from "react";
import AddEventForm from "../components/AddEventForm";
import Layout from "../components/Layout";

const CreatePost: React.FC<{}> = () => {
	return (
		<Layout>
			<h4 className="m-0">Add Event</h4>
			<p style={{ opacity: "0.8" }}>Plan an event, create the schedule</p>
			<hr className="pb-2" />
			<AddEventForm />
		</Layout>
	);
};

export default CreatePost;

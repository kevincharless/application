import React from "react";
import AddEventForm from "../components/AddEventForm";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

const CreatePost: React.FC<{}> = () => {
	return (
		<Layout>
			<PageHeader
				title="Add Event"
				description="Plan an event, create the schedule"
			/>
			<AddEventForm />
		</Layout>
	);
};

export default CreatePost;

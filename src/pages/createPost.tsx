import React from "react";
import AddEventForm from "../components/AddEventForm";
import Layout from "../components/Layout";

const CreatePost: React.FC<{}> = ({}) => {
	return (
		<Layout>
			<AddEventForm />
		</Layout>
	);
};

export default CreatePost;

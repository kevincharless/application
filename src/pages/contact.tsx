import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { getUsers } from "../redux/actions/users";
import { RootState } from "../redux/store";
import { UserType } from "../utils/types";
import { BsThreeDots } from "react-icons/bs";

const Contact: React.FC<{}> = () => {
	const contacts = useSelector((state: RootState) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<Layout>
			<h4 className="m-0">Contact</h4>
			<div className="d-flex justify-content-between">
				<p className="d-inline" style={{ opacity: "0.8" }}>
					Add your colleagues contact, invite them to your event
				</p>
				<Button className="button">Add contact</Button>
			</div>
			<hr className="pb-2" />
			{contacts.isLoading ? (
				<div>loading...</div>
			) : !contacts.isLoading && !contacts.users ? (
				<div>Please add your contact</div>
			) : (
				<Table hover size="md">
					<thead style={{ backgroundColor: "#d9e2e7" }}>
						<tr style={{ opacity: "0.8" }}>
							<th className="pl-4">FULL NAME</th>
							<th className="pl-4">JOB TITLE</th>
							<th className="pl-4">JOIN DATE</th>
							<th className="pl-4 text-center">OPTIONS</th>
						</tr>
					</thead>
					<tbody className="bg-white">
						{contacts.users.map((contact: UserType) => (
							<tr key={contact.id.toString()}>
								<td
									className="pl-4 font-weight-bold"
									style={{ color: "#2a58ae" }}
								>
									{contact.name}
								</td>
								<td className="pl-4" style={{ opacity: "0.8" }}>
									{contact.jobTitle}
								</td>
								<td className="pl-4" style={{ opacity: "0.8" }}>
									{contact.joinDate}
								</td>
								<td className="pl-4 text-center" style={{ opacity: "0.8" }}>
									<Button className="button-icon" variant="link">
										<BsThreeDots />
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</Layout>
	);
};

export default Contact;

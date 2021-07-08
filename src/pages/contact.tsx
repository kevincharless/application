import React, { useEffect } from "react";
import { Button, Dropdown, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { getUsers } from "../redux/actions/users";
import { RootState } from "../redux/store";
import { UserType } from "../utils/types";
import { AiOutlineDelete } from "react-icons/ai";
import { VscEdit } from "react-icons/vsc";
import PageHeader from "../components/PageHeader";

const Contact: React.FC<{}> = () => {
	const contacts = useSelector((state: RootState) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<Layout>
			<PageHeader
				title="Contact"
				description="Add your colleagues contact, invite them to your event"
				button={<Button className="button">Add contact</Button>}
			/>
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
								<td className="pl-4 text-center">
									<Dropdown>
										<Dropdown.Toggle
											className="button"
											id="dropdown-basic"
										></Dropdown.Toggle>

										<Dropdown.Menu className="p-0">
											<Dropdown.Item className="py-2" eventKey="1">
												Edit Contact &nbsp;
												<VscEdit />
											</Dropdown.Item>
											<Dropdown.Item className="py-2" eventKey="2">
												Delete Contact &nbsp;
												<AiOutlineDelete />
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
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

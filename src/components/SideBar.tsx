import React from "react";
import { Image, ListGroup } from "react-bootstrap";
import { IoIosLaptop } from "react-icons/io";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";
import { RiTempColdLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export const SideBar: React.FC<{}> = () => {
	return (
		<>
			<div id="sidebar-wrapper">
				<div className="pt-5 pb-4 text-center">
					<Image
						roundedCircle
						className="mb-3 img-fluid sidebar-image"
						src="https://randomuser.me/api/portraits/thumb/women/35.jpg"
					/>
					<p className="font-weight-bolder mb-0">Zara Jackson</p>
					<p>Master</p>
				</div>
				<ListGroup className="list-group">
					<NavLink
						to="/"
						exact
						className="list-group-item p-3 text-center"
						activeClassName="active"
					>
						<div>
							<IoIosLaptop style={{ fontSize: "2.5rem" }} />
							<br />
							DASHBOARD
						</div>
					</NavLink>

					<NavLink
						to="/create-post"
						className="list-group-item p-3 text-center"
						activeClassName="active"
					>
						<div>
							<AiOutlineSchedule style={{ fontSize: "2.5rem" }} />
							<br />
							ADD EVENT
						</div>
					</NavLink>

					<NavLink
						to="/contact"
						className="list-group-item p-3 text-center"
						activeClassName="active"
					>
						<div>
							<IoPeopleOutline style={{ fontSize: "2.5rem" }} />
							<br />
							CONTACT
						</div>
					</NavLink>
					<NavLink
						to="/temperature"
						className="list-group-item p-3 text-center"
						activeClassName="active"
					>
						<div>
							<RiTempColdLine style={{ fontSize: "2.5rem" }} />
							<br />
							TEMPERATURE
						</div>
					</NavLink>
				</ListGroup>
			</div>
		</>
	);
};

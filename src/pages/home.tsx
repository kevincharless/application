import React from "react";
import AddEventForm from "../components/AddEventForm/index";
import EventCard from "../components/EventCard";
import Layout from "../components/Layout";

const home: React.FC<{}> = () => {
	const apiData = [
		{
			id: 1,
			title: "Meeting with CEO",
			location: "Senanyan City Hotel",
			participants: [],
			date: "11 Sep 2019",
			time: {
				start: "15:00",
				end: "17:00",
			},
			notes:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur perspiciatis ducimus praesentium illum eligendi?",
			createdBy: "Jessica Jones",
		},
		{
			id: 2,
			title: "Meeting with CEO",
			location: "Senanyan City Hotel",
			participants: [
				{
					name: "John Doeeee",
					picture: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
				},
				{
					name: "Bobby",
					picture: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
				},
				{
					name: "William",
					picture: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
				},
				{
					name: "Ben Tic",
					picture: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
				},
				{
					name: "Tim Doe",
					picture: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
				},
				{
					name: "Christoper",
					picture: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
				},
			],
			date: "11 Sep 2019",
			time: {
				start: "15:00",
				end: "17:00",
			},
			notes:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur perspiciatis ducimus praesentium illum eligendi?",
			createdBy: "Jessica Jones",
		},
	];
	return (
		<Layout>
			<AddEventForm />
			{/* {!apiData
				? null
				: apiData.map((data) => (
						<EventCard
							key={data.id}
							title={data.title}
							location={data.location}
							participants={data.participants}
							date={data.date}
							time={data.time}
							notes={data.notes}
							createdBy={data.createdBy}
						/>
				  ))} */}
		</Layout>
	);
};

export default home;

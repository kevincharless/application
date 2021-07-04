import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "../components/EventCard";
import Layout from "../components/Layout";
import { getPosts } from "../redux/actions/posts";
import { RootState } from "../redux/store";

const Home: React.FC<{}> = () => {
	const posts = useSelector((state: RootState) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return (
		<Layout>
			{!posts
				? null
				: posts.map((post: any) => (
						<EventCard
							key={post.id}
							title={post.title}
							location={post.location}
							participants={post.participants}
							date={post.date}
							time={post.time}
							notes={post.notes}
							createdBy={post.createdBy}
						/>
				  ))}
		</Layout>
	);
};

export default Home;

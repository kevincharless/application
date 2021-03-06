import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "../components/EventCard";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import { getPosts } from "../redux/actions/posts";
import { RootState } from "../redux/store";

const Home: React.FC<{}> = () => {
	const posts = useSelector((state: RootState) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	if (!posts.posts && !posts.isLoading) {
		return <Layout>there is no posts</Layout>;
	}

	return (
		<Layout>
			<PageHeader
				title="Dashboard"
				description="Follow the available schedule, stay productive all the time"
			/>
			<Row>
				{!posts.posts && posts.isLoading ? (
					<div>loading...</div>
				) : (
					posts.posts
						.sort((a: any, b: any) => b.id - a.id)
						.map((post: any) => (
							<Col className="mb-4 d-flex justify-content-center" key={post.id}>
								<EventCard
									title={post.title}
									location={post.location}
									participants={post.participants}
									date={post.date}
									time={post.time}
									notes={post.notes}
									createdBy={post.createdBy}
								/>
							</Col>
						))
				)}
			</Row>
		</Layout>
	);
};

export default Home;

import * as api from "../../axios";
import { FETCH_POSTS } from "../constants";

export const getPosts = () => async (dispatch: any) => {
	try {
		const { data } = await api.fetchPosts();

		dispatch({ type: FETCH_POSTS, payload: data });
	} catch (error: any) {
		console.log(error);
	}
};

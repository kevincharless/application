import * as api from "../../axios";
import { PostType } from "../../utils/types";
import {
	CREATE_POST,
	FETCH_LOADED,
	FETCH_LOADING,
	FETCH_POSTS,
} from "../constants";

export const fetchLoading = { type: FETCH_LOADING };
export const fetchLoaded = { type: FETCH_LOADED };

export const getPosts = () => async (dispatch: any) => {
	dispatch(fetchLoading);
	try {
		const { data } = await api.fetchPosts();

		dispatch({ type: FETCH_POSTS, payload: data });
		dispatch(fetchLoaded);
	} catch (error: any) {
		console.log(error);
	}
};

export const createPost = (newPost: PostType) => async (dispatch: any) => {
	dispatch(fetchLoading);

	try {
		const { data } = await api.createPost(newPost);

		dispatch({ type: CREATE_POST, payload: data });
		dispatch(fetchLoaded);
	} catch (error: any) {
		console.log(error);
	}
};

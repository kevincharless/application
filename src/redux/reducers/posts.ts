import {
	CREATE_POST,
	FETCH_LOADED,
	FETCH_LOADING,
	FETCH_POSTS,
} from "../constants";

interface Time {
	start: String;
	end: String;
}

interface Post {
	id: Number;
	title: String;
	location: String;
	participants: { name: String; picture: String }[];
	date: String;
	time: Time;
	notes: String;
	createdBy: String;
}

interface InitialState {
	posts: Post[];
	isLoading: Boolean;
}

const initialState = {
	posts: [],
	isLoading: true,
} as InitialState;

const postsReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCH_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_LOADED:
			return {
				...state,
				isLoading: false,
			};
		case FETCH_POSTS:
			return {
				...state,
				posts: action.payload,
			};
		case CREATE_POST:
			return {
				...state,
				posts: [action.payload, ...state.posts],
			};
		default:
			return state;
	}
};

export default postsReducer;

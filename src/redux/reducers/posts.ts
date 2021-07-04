import { FETCH_POSTS } from "../constants";

interface Time {
	start: String;
	end: String;
}

interface Posts {
	id: Number;
	title: String;
	location: String;
	participants: { name: String; picture: String }[];
	date: String;
	time: Time;
	notes: String;
	createdBy: String;
}

const initialState = [] as Posts[];

const postsReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCH_POSTS:
			return (state = action.payload);
		default:
			return state;
	}
};

export default postsReducer;

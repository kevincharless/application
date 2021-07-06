import { FETCH_LOADED, FETCH_LOADING, FETCH_USERS } from "../constants";

interface User {
	name: String;
	picture: String;
}

interface InitialState {
	users: User[];
	isLoading: Boolean;
}

const initialState = {
	users: [],
	isLoading: true,
} as InitialState;

const usersReducer = (state = initialState, action: any) => {
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
		case FETCH_USERS:
			return {
				...state,
				users: action.payload,
			};
		default:
			return state;
	}
};

export default usersReducer;

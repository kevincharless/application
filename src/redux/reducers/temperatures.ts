import { FETCH_LOADED, FETCH_LOADING, FETCH_TEMPERATURE } from "../constants";

interface InitialState {
	temperatures: any[];
	isLoading: Boolean;
}

const initialState = {
	temperatures: [],
	isLoading: true,
} as InitialState;

const temperaturesReducer = (state = initialState, action: any) => {
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
		case FETCH_TEMPERATURE:
			return {
				...state,
				temperatures: [...state.temperatures, action.payload],
			};
		default:
			return state;
	}
};

export default temperaturesReducer;

import * as api from "../../axios";
import { FETCH_LOADED, FETCH_LOADING, FETCH_USERS } from "../constants";

export const fetchLoading = { type: FETCH_LOADING };
export const fetchLoaded = { type: FETCH_LOADED };

export const getUsers = () => async (dispatch: any) => {
	dispatch(fetchLoading);
	try {
		const { data } = await api.fetchUsers();

		dispatch({ type: FETCH_USERS, payload: data });
		dispatch(fetchLoaded);
	} catch (error: any) {
		console.log(error);
	}
};

import * as api from "../../axios";
import { FETCH_LOADED, FETCH_LOADING, FETCH_TEMPERATURE } from "../constants";

export const fetchLoading = { type: FETCH_LOADING };
export const fetchLoaded = { type: FETCH_LOADED };

export const getTemperatures = () => async (dispatch: any) => {
	dispatch(fetchLoading);
	try {
		const { data } = await api.getCurrentWeather();

		dispatch({ type: FETCH_TEMPERATURE, payload: data });
		dispatch(fetchLoaded);
	} catch (error: any) {
		console.log(error);
	}
};

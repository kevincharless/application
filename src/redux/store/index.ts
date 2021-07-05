import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import postsReducer from "../reducers/posts";

const store = configureStore({
	reducer: {
		posts: postsReducer,
	},
});
// composeWithDevTools(applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
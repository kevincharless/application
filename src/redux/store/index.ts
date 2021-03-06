import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../reducers/posts";
import temperaturesReducer from "../reducers/temperatures";
import usersReducer from "../reducers/users";

const store = configureStore({
	reducer: {
		posts: postsReducer,
		users: usersReducer,
		temperatures: temperaturesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

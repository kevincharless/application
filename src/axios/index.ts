import axios from "axios";
import { PostType } from "../utils/types";

const API = axios.create({
	baseURL: "http://localhost:3004/",
});

const WEATHERAPI = axios.create({
	baseURL: "http://api.weatherapi.com/v1",
});

export const fetchUsers = () => API.get("/users");

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost: PostType) => API.post("/posts", newPost);

export const getCurrentWeather = () =>
	WEATHERAPI.get("/current.json", {
		params: {
			key: "74b3e057b0c24f7f8c483539210607",
			q: "Jakarta",
		},
	});

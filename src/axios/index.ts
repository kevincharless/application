import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:3004/",
});

export const fetchPosts = () => API.get("/posts");
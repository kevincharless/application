import axios from "axios";
import { PostType } from "../utils/types";

const API = axios.create({
	baseURL: "http://localhost:3004/",
});

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost: PostType) => API.post("/posts", newPost);

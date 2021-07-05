import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import CreatePost from "./pages/createPost";

const App: React.FC<{}> = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/create-post">
					<CreatePost />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;

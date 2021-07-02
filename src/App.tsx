import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";

const App: React.FC<{}> = () => {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;

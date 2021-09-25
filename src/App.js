import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing";
import GamePagee from "./components/gamepage";

function App() {
	return (
		<div>
			<Switch>
				<Route path="/gamepage" component={GamePagee} />
				<Route path="/home" component={Landing} />
				<Redirect from="/" to="/home" />
			</Switch>
		</div>
	);
}

export default App;

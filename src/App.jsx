import MenuAdjust from "./components/Adjust/MenuAdjust";
import Insigths from "./components/Insigths";
import Sections from "./components/Section/Sections";
import "./queries.css";

function App() {

	return (
		<>
			<aside className="events">
				<Insigths />
				<MenuAdjust />
			</aside>
			<Sections />
		</>
	);
}

export default App;

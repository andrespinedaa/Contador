import { useContext } from "react";
import { ListContext } from "../contexts/ListsContext";
import "./insights.css";

function Insigths() {
	const { count } = useContext(ListContext);

	const insights = Object.entries(count.insights).map(([key, value]) => ({
		name: key,
		amount: value,
	}));

	return (
		<ul className="insights">
			{insights.map((detail) => (
				<li key={detail.name} className="insights__detail">
					{detail.name}: {detail.amount}
				</li>
			))}
		</ul>
	);
}

export default Insigths;

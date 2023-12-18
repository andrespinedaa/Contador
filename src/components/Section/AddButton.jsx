import { useContext } from "react";
import { ListContext } from "../../contexts/ListsContext";

function AddButton({ info }) {
	const { dispatch } = useContext(ListContext);

	return (
		<button onClick={() => dispatch({ type: "ADD", payload: info })}>+</button>
	);
}

export default AddButton;

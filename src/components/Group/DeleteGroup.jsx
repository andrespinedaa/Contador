import { useContext } from "react";
import { ListContext } from "../../contexts/ListsContext";
import { MdDelete } from "react-icons/md";

function DeleteGroup({ info }) {
	const { dispatch } = useContext(ListContext);
	return (
		<button
			onClick={() => {
				dispatch({ type: "DELETE_GROUP", payload: info });
			}}
		>
			<MdDelete size={"20px"} />
		</button>
	);
}

export default DeleteGroup;

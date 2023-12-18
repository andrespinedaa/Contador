import { useContext } from "react";
import { ListContext } from "../../contexts/ListsContext";
import { MdDelete } from "react-icons/md";

function DeleteSection({ info }) {
	const { dispatch } = useContext(ListContext);
	return (
		<button>
			<MdDelete
				onClick={() => dispatch({ type: "DELETE_SECTION", payload: info })}
				size={"20px"}
			/>
		</button>
	);
}

export default DeleteSection;

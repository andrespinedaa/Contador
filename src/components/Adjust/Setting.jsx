import { useContext, useState } from "react";
import { MdCancel, MdOutlineSkipNext } from "react-icons/md";
import { ListContext } from "../../contexts/ListsContext";

function Setting({type}) {
	const { dispatch } = useContext(ListContext);
	const [nameSection, setNameSection] = useState("");

	const handleCreation = () => {
		dispatch({ type: type, payload: nameSection });
        setNameSection("")
	};

	const handleNameSection = (e) => {
		setNameSection(e.target.value);
	};

	return (
		<div className="create__section">
			<div className="create__section--inputs">
				<input
					type="text"
					onChange={(e) => handleNameSection(e)}
					value={nameSection}
					placeholder="name"
				/>
			</div>
			<div className="create__section--actions">
				<MdOutlineSkipNext onClick={() => handleCreation()} />
				<MdCancel onClick={() => setNameSection("")} />
			</div>
		</div>
	);
}

export default Setting;

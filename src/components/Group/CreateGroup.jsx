import { useContext, useState } from "react";
import { ListContext } from "../../contexts/ListsContext";
import { MdCancel, MdOutlineSkipNext } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Validation from "../../middleware/validation";
import "./creategroup.css";

function CreateGroup({ info }) {
	const { dispatch, count } = useContext(ListContext);
	const [open, setOpen] = useState(false);
	const [newGroup, setNewGroup] = useState({
		name: "",
		amount: 0,
	});

	const handleCreate = () => {
		const flag = count.sections
			.find((section) => section.name === info)
			.groups.some((group) => group.name === newGroup.name);

		if (flag) {
			
		} else {
			dispatch({
				type: "CREATE_GROUP",
				payload: { sectionName: info, group: newGroup },
			});
			setNewGroup({ name: "", amount: 0 });
			setOpen(!open);
		}
	};

	const handleInput = (e) => {
		if (Validation(e.target.value).flag) {
		} else {
			setNewGroup({ ...newGroup, [e.target.name]: e.target.value });
		}
	};

	return (
		<div className="create__group--button">
			<AiOutlinePlusCircle
				size={"20px"}
				onClick={() => {
					setOpen(!open);
				}}
			/>
			{open && (
				<form className="create__group--form">
					<div className="create__group--inputs">
						<input
							type="text"
							placeholder="name"
							name="name"
							value={newGroup.name}
							className="create__group--inputInfo"
							onChange={(e) => handleInput(e)}
						/>
						<input
							type="text"
							placeholder="amount"
							name="amount"
							value={newGroup.amount}
							className="create__group--inputInfo"
							onChange={(e) => handleInput(e)}
						/>
					</div>
					<div className="create__group--actions">
						<MdCancel
							size={"20px"}
							onClick={() => {
								setNewGroup({ name: "", amount: 0 });
								setOpen(!open);
							}}
						/>
						<MdOutlineSkipNext size={"20px"} onClick={() => {}} />
					</div>
				</form>
			)}
		</div>
	);
}

export default CreateGroup;

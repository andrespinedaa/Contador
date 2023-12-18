import { useContext } from "react";
import { ListContext } from "../../contexts/ListsContext";
import { Total, CreateGroup, DeleteSection, Groups } from "../";
import "./sections.css";

function Sections() {
	const { count } = useContext(ListContext);
	const { sections } = count;

	return (
		<div className="sections">
			{sections.map((section) => {
				return (
					<div className="section" key={section.name}>
						<div className="section__info">
							<span>Sesión: {section.name}</span>
							<Total amount={section.total} />
						</div>
						<Groups groups={section.groups} section={section} />
						<div className="section__actions">
							<CreateGroup info={section.name} />
							<DeleteSection info={section.name} />
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Sections;

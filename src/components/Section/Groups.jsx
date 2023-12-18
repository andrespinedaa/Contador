import AddButton from "./AddButton";
import SubsButton from "./SubsButton";
import DeleteGroup from "../Group/DeleteGroup";

function Groups({ groups, section }) {
	return (
		<div className="section__groups">
			{groups.map((group) => {
				return (
					<div key={group.name} className="group">
						<span className=" group__acount">
							{group.name}: {group.amount}
						</span>
						<div className="group__actions">
							<AddButton
								info={{
									sectionName: section.name,
									groupName: group.name,
								}}
							/>
							<SubsButton
								info={{
									sectionName: section.name,
									groupName: group.name,
								}}
							/>
							<DeleteGroup
								info={{
									sectionName: section.name,
									groupName: group.name,
								}}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Groups;

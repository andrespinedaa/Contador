import ItemAdjust from "./ItemAdjust";
import Setting from "./Setting";
import "./menuadjust.css";
import "./adjust.css";

function MenuAdjust() {
	return (
		<ul className="adjust__menu">
			<ItemAdjust text={"Crear sesion"}>
				<Setting type={"CREATE_SECTION"} />
			</ItemAdjust>
			<ItemAdjust text={"Crear grupo"}>
				<Setting type={"INSERT_GROUP"} />
			</ItemAdjust>
			<ItemAdjust text={"Eliminar grupo"}>
				<Setting type={"CUT_GROUP"} />
			</ItemAdjust>
		</ul>
	);
}

export default MenuAdjust;

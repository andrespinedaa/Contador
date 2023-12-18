import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

function ItemAdjust({ children, text }) {
	const [open, setOpen] = useState(false);

	return (
		<li className="adjust__menu--item">
			<div className="menu__item--info">
				<span>{text}</span>
				<IoIosArrowBack
					size={"20px"}
					onClick={() => setOpen(!open)}
					className={open ? "rotate" : "static"}
				/>
			</div>
			{open && children}
		</li>
	);
}

export default ItemAdjust;

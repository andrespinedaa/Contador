import { createContext, useReducer,useState } from "react";

import INITIAL_STATE from "../reducers/countInitial";
import COUNT_REDUCER from "../reducers/countReducer.js";

export const ListContext = createContext();

function ListProvider({ children }) {
	const [count, dispatch] = useReducer(COUNT_REDUCER, INITIAL_STATE);

	return (
		<ListContext.Provider value={{ count, dispatch }}>
			{children}
		</ListContext.Provider>
	);
}

export default ListProvider;

export const INITIAL_GROUPS = [
	{
		name: "Visitas",
		amount: 0,
	},
	{
		name: "Niños",
		amount: 0,
	},
	{
		name: "Mujeres",
		amount: 0,
	},
	{
		name: "Hombres",
		amount: 0,
	},
];

export const INITIAL_SECTION = {
	name: "platea",
	groups: INITIAL_GROUPS,
	total: 0,
};

export const INITIAL_STATE = {
	sections: [INITIAL_SECTION],
	insights: {
		total: 0,
	},
};

INITIAL_GROUPS.forEach((group) => {
	INITIAL_STATE.insights[group.name] = group.amount;
});

export default INITIAL_STATE;

import { INITIAL_GROUPS } from "./countInitial";

const COUNT_REDUCER = (state, action) => {
	switch (action.type) {
		case "ADD": {
			const addGroup = state.sections
				.find((section) => section.name === action.payload.sectionName)
				.groups.find((group) => group.name === action.payload.groupName);

			return {
				...state,
				sections: state.sections.map((section) => {
					if (section.name === action.payload.sectionName) {
						return {
							...section,
							groups: section.groups.map((group) => {
								if (group.name === action.payload.groupName) {
									section.total += 1;
									return { ...group, amount: group.amount + 1 };
								}
								return group;
							}),
						};
					}
					return section;
				}),

				insights: {
					...state.insights,
					total: state.insights.total++,
					[addGroup.name]: state.insights[addGroup.name]++,
				},
			};
		}

		case "SUBS": {
			const subsGroup = state.sections
				.find((section) => section.name === action.payload.sectionName)
				.groups.find((group) => group.name === action.payload.groupName);

			return {
				...state,
				sections: state.sections.map((section) => {
					if (section.name === action.payload.sectionName) {
						return {
							...section,
							groups: section.groups.map((group) => {
								if (
									group.name === action.payload.groupName &&
									group.amount > 0
								) {
									section.total--;
									return { ...group, amount: group.amount - 1 };
								}

								return group;
							}),
						};
					}

					return section;
				}),

				insights: {
					...state.insights,
					total:
						subsGroup.amount > 0
							? state.insights.total--
							: state.insights.total,
					[subsGroup.name]:
						state.insights[subsGroup.name] > 0
							? state.insights[subsGroup.name]--
							: state.insights[subsGroup.name],
				},
			};
		}

		case "CREATE_GROUP": {
			return {
				...state,
				sections: state.sections.map((section) => {
					if (section.name === action.payload.sectionName) {
						return {
							...section,
							groups: [...section.groups, action.payload.group],
							total: section.total + action.payload.group.amount,
						};
					}

					return section;
				}),

				insights: {
					...state.insights,
					total: state.insights.total + action.payload.group.amount,
					[action.payload.group.name]:
						(state.insights[action.payload.group.name] || 0) +
						action.payload.group.amount,
				},
			};
		}

		case "DELETE_GROUP": {
			const deletesGroup = state.sections
				.find((section) => section.name === action.payload.sectionName)
				.groups.find((group) => group.name === action.payload.groupName);

			return {
				...state,
				sections: state.sections.map((section) => {
					if (section.name === action.payload.sectionName) {
						return {
							...section,
							groups: section.groups.filter(
								(group) => group.name !== action.payload.groupName
							),
							total: section.total - deletesGroup.amount,
						};
					}

					return section;
				}),

				insights: {
					...state.insights,
					total: state.insights.total - deletesGroup.amount,
					[deletesGroup.name]:
						state.insights[deletesGroup.name] - deletesGroup.amount,
				},
			};
		}

		case "CREATE_SECTION": {
			const newName = state.sections.map((section) => {
				const a = section.name.match(/\((\d+)\)$/);
				if (a === null) {
					return {
						name: action.payload + "(1)",
						groups: INITIAL_GROUPS,
						total: 0,
					};
				} else {
					return {
						name: action.payload + `(${Number(a[1]) + 1})`,
						groups: INITIAL_GROUPS,
						total: 0,
					};
				}
			});

			const exists = state.sections.some(
				(section) => section.name === action.payload
			);

			return {
				...state,
				sections: [
					...state.sections,
					exists
						? newName[newName.length - 1]
						: { name: action.payload, groups: INITIAL_GROUPS, total: 0 },
				],
			};
		}

		case "DELETE_SECTION": {
			let updateDetails = { ...state.insights };

			const deleteSection = state.sections.find(
				(section) => section.name === action.payload
			);

			const sectionGroups = deleteSection.groups;

			sectionGroups.forEach((group) => {
				if (updateDetails[group.name]) {
					updateDetails = {
						...updateDetails,
						[group.name]: updateDetails[group.name] - group.amount,
					};
				}
			});

			return {
				...state,
				sections: state.sections.filter(
					(section) => section.name !== action.payload
				),

				insights: {
					...updateDetails,
					total: state.insights.total - deleteSection.total,
				},
			};
		}

		case "CUT_GROUP": {
			const exist = state.sections.some((section) => {
				return section.groups.some((group) => group.name === action.payload);
			});

			if (exist) {
				let updateDetails = { ...state.insights };

				const groupCut = state.sections.map((section) => {
					if (section.groups.some((group) => group.name === action.payload)) {
						return section.groups.find(
							(group) => group.name === action.payload
						);
					}
				});

				const groupCutAmounts = groupCut.reduce((acumulator, groupNext) => {
					return acumulator + groupNext.amount;
				}, 0);

				groupCut.forEach((group) => {
					updateDetails = {
						...updateDetails,
						[group.name]: updateDetails[group.name] - group.amount,
					};
				});

				return {
					...state,
					sections: state.sections.map((section) => {
						return {
							...section,
							groups: section.groups.filter(
								(group) => group.name !== action.payload
							),
							total:
								section.total -
								(section.groups.find((group) => group.name === action.payload)
									.amount || 0),
						};
					}),

					insights: {
						...updateDetails,
						total: state.insights.total - groupCutAmounts,
					},
				};
			} else {
				return state;
			}
		}

		case "INSERT_GROUP": {
			return state;
		}

		default:
			return state;
	}
};

export default COUNT_REDUCER;

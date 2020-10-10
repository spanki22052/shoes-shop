const initialState = {
	menuState: false
}

const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_MENU_STATE":
			return {
				...state,
				menuState: !state.menuState
			}
		default:
			return state;
	}
}

export default menuReducer;
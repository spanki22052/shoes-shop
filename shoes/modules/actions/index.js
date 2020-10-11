const changeMenuState = () => {
	return {
		type: "CHANGE_MENU_STATE",
	};
};

const closeMenu = () => {
	return {
		type: "SET_FALSE_STATE",
	};
};
export {
	changeMenuState,
	closeMenu
}
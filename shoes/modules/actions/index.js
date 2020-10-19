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

//load data
const productLoaded = (newProduct) => {
	return {
		type: "PRODUCT_LOADED",
		list: newProduct
	};
};

const categoryLoaded = (newProduct) => {
	return {
		type: "CATEGORY_LOADED",
		list: newProduct
	};
};
export {
	changeMenuState,
	closeMenu,
	productLoaded,
	categoryLoaded
}
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
const addedToCard = (id) => {
	return {
		type: 'ITEM_ADD_TO_CARD',
		payload: id
	};
};

const deleteFromCard = (id) => {
	return {
		type: 'ITEM_REMOVE_FROM_CARD',
		payload: id
	};
};
export {
	changeMenuState,
	closeMenu,
	productLoaded,
	categoryLoaded,
	addedToCard,
	deleteFromCard
}
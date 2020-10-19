const initialState = {
	productList: [],
	categoryList: [],
}

const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		//data
		case "PRODUCT_LOADED":
			return {
				...state,
				productList: action.list
			};
		case "CATEGORY_LOADED":
			return {
				...state,
				categoryList: action.list
			};
		default:
			return state;
	}
}
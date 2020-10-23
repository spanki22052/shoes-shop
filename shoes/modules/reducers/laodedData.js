const initialState = {
	productList: [],
	categoryList: [],
	emptyCategoryList: [],
	cartItems: [],
};

const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		//data
		case "PRODUCT_LOADED":
			return {
				...state,
				productList: action.list,
			};
		case "CATEGORY_LOADED":
			return {
				...state,
				categoryList: action.list,
			};
		case "EMPTY_CATEGORY_LOADED":
			return {
				...state,
				emptyCategoryList: action.list,
			};
		default:
			return state;
		//card
		case "ITEM_ADD_TO_CARD":
			const newItem = state.productList.find(
				(item) => item.productCode === action.payload
			);
			if (state.cartItems.findIndex((item) => item.productCode === newItem.productCode) !== -1) {
				const clone = state.cartItems.find((item) => item.productCode === newItem.productCode);
				const newCart = state.cartItems.filter(
					(item) => item.productCode !== newItem.productCode
				);
				clone.amount = clone.amount + 1;
				newCart.push(clone);
				return {
					...state,
					cartItems: newCart,
				};
			} else {
				newItem.amount = 1;
				return {
					...state,
					cartItems: [...state.cartItems, newItem],
				};
			}
		case "ITEM_REMOVE_FROM_CARD":
			const idx = action.payload;
			const itemIndex = state.cartItems.findIndex((item) => item.id === idx);
			return {
				...state,
				cartItems: [
					...state.cartItems.slice(0, itemIndex),
					...state.cartItems.slice(itemIndex + 1),
				],
			};
	}
};

export default dataReducer;

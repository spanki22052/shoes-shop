import classes from "../../styles/productList.module.scss";
import { useDispatch, useSelector, useStore } from "react-redux";
import { closeMenu as close } from "../../modules/actions";
import { useState } from "react";
import { useRouter } from "next/router";
import ProdBlock from "./productBlock";


const tagOptions = [
	{
		key: "Important",
		text: "Important",
		value: "Important",
		label: { color: "red", empty: true, circular: true },
	},
];
// const products = [
// 	{
// 		img:
// 			"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
// 		title: "Черные ботинки Fresco",
// 		price: 3300,
// 		sizes: [39, 40, 41, 42, 43, 44, 45, 46],
// 		new: true,
// 	},
// 	{
// 		img:
// 			"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
// 		title: "Черные ботинки Fresco",
// 		price: 3300,
// 		sizes: [39, 40, 41, 42, 43, 44, 45, 46],
// 	},
// 	{
// 		img:
// 			"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
// 		title: "Черные ботинки Fresco",
// 		price: 3300,
// 		sizes: [39, 40, 41, 42, 43, 44, 45, 46],
// 		new: true,
// 	},
// 	{
// 		img:
// 			"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
// 		title: "Черные ботинки Fresco",
// 		price: 3300,
// 		sizes: [39, 40, 41, 42, 43, 44, 45, 46],
// 	},
// 	{
// 		img:
// 			"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
// 		title: "Черные ботинки Fresco",
// 		price: 3300,
// 		sizes: [39, 40, 41, 42, 43, 44, 45, 46],
// 		new: true,
// 	},
// 	{
// 		img:
// 			"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
// 		title: "Черные ботинки Fresco",
// 		price: 3300,
// 		sizes: [39, 40, 41, 42, 43, 44, 45, 46],
// 	},
// 	{
// 		img:
// 			"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
// 		title: "Черные ботинки Fresco",
// 		price: 3300,
// 		sizes: [39, 40, 41, 42, 43, 44, 45, 46],
// 		new: true,
// 	},
// 	{
// 		img:
// 			"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
// 		title: "Черные ботинки Fresco",
// 		price: 3300,
// 		sizes: [39, 40, 41, 42, 43, 44, 45, 46],
// 	},
// 	{
// 		img:
// 			"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
// 		title: "Черные ботинки Fresco",
// 		price: 3300,
// 		sizes: [39, 40, 41, 42, 43, 44, 45, 46],
// 		new: true,
// 	},
// 	{
// 		img:
// 			"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
// 		title: "Черные ботинки Fresco",
// 		price: 3300,
// 		sizes: [39, 40, 41, 42, 43, 44, 45, 46],
// 		new: true,
// 	},
// 	{
// 		img:
// 			"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
// 		title: "Черные ботинки Fresco",
// 		price: 3300,
// 		sizes: [39, 40, 41, 42, 43, 44, 45, 46],
// 	},
// 	{
// 		img:
// 			"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
// 		title: "Черные ботинки Fresco",
// 		price: 3300,
// 		sizes: [39, 40, 41, 42, 43, 44, 45, 46],
// 	},
// ];

const categorys = [
	{
		category: "Категория",
		subCategory: [
			"Ботинки",
			"Кроссовки",
			"Туфли",
			"Мокасины",
			"Кеды",
			"Полуботинки",
			"Сапоги",
		],
	},
];

const sizes = [
	{
		category: "Размер",
		subCategory: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
	},
];

const prices = [
	{
		category: "Цена",
		subCategory: ["До 3000 рублей", "От 3000 до 5000 рублей", "От 5000 рублей"],
	},
];

const ProductList = () => {
	const translations = {
		men: "Мужская обувь",
		kids: "Детская обувь",
		women: "Женская обувь",
	};
	const dispatch = useDispatch();
	const menuState = useSelector((state) => state.menu.menuState);
	const dataState = useSelector((state) => state.data);
	const products = dataState.productList;
	const closeMenu = () => {
		dispatch(close());
			console.log(productsSs);
	};
	const router = useRouter().query.id;
	const [choosenFilter, setFilter] = useState("");
	const [choosenCategory, setCategory] = useState("Все");
	const [sizeArray, changeArr] = useState([]);
	const [firstPrice, changeFirstPrice] = useState(0);
	const [lastPrice, changeLastPrice] = useState(100000);
	const [sortBy, changeSort] = useState();

	const checBox = (event) => {
		let addArr = [...sizeArray, event.target.value];
		let remArr = sizeArray.filter((item) => item !== event.target.value);
		event.target.checked
			? sizeArray.length !== 0
				? sizeArray.find((item) => item === event.target.value)
					? changeArr(sizeArray)
					: changeArr(addArr)
				: changeArr(addArr)
			: changeArr(remArr);
		console.log(sizeArray);
	};

	const checPrice = (event) => {
		event.target.checked
			? event.target.value === "Любая"
				? (changeFirstPrice(0), changeLastPrice(100000))
				: event.target.value === "До 3000 рублей"
					? (changeFirstPrice(0), changeLastPrice(3000))
					: event.target.value === "От 3000 до 5000 рублей"
						? (changeFirstPrice(3000), changeLastPrice(5000))
						: (changeFirstPrice(5000), changeLastPrice(100000))
			: (changeFirstPrice(0), changeLastPrice(10000));
	};

	const categoryList = categorys.map((item, id) => {

		return (
			<div key={id} className={classes.categoryItem}>
				<div
					onClick={() => {
						choosenFilter === item.category
							? setFilter("")
							: setFilter(item.category);
					}}
					className={classes.categoryTitle}
				>
					{item.category}
					<svg
						className={
							choosenFilter !== item.category
								? classes.categoryIcon
								: classes.categoryIcon + " " + classes.activeIcon
						}
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="black"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M15 14L10 9L5 14L3 13L10 6L17 13L15 14Z" fill="#EA5F00" />
					</svg>
				</div>
				<div
					className={
						choosenFilter !== item.category
							? classes.subCategory
							: classes.subCategory + " " + classes.activeContent
					}
				>
					<ul className={classes.subCategoryList}>
						<li
							onClick={() => {
								setCategory("Все");
							}}
							className={
								choosenCategory !== "Все"
									? classes.subCategoryItem
									: classes.subCategoryItem + " " + classes.activeSubCategory
							}
						>
							Все
            </li>
						{item.subCategory.map((item, idx) => {
							return (
								<li
									key={idx}
									className={
										choosenCategory !== item
											? classes.subCategoryItem
											: classes.subCategoryItem +
											" " +
											classes.activeSubCategory
									}
									onClick={() => {
										setCategory(item);
										console.log(firstPrice + "" + lastPrice);
									}}
								>
									{item}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	});

	const sizeList = sizes.map((item, id) => {
		return (
			<div key={id} className={classes.filterItem}>
				<div
					onClick={() => {
						choosenFilter === item.category
							? setFilter("")
							: setFilter(item.category);
					}}
					className={classes.filterName}
				>
					{item.category}

					<svg
						className={
							choosenFilter !== item.category
								? classes.filterIcon
								: classes.filterIcon + " " + classes.activeIcon
						}
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="#EA5F00"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M15 14L10 9L5 14L3 13L10 6L17 13L15 14Z" fill="#EA5F00" />
					</svg>
				</div>
				<div
					className={
						choosenFilter !== item.category
							? classes.subFilter
							: classes.subFilter + " " + classes.activeContent
					}
				>
					<div className={classes.subFilterList}>
						<div className={classes.russiansize}>Российский размер</div>
						{item.subCategory.map((item, idx) => {
							return (
								<div key={idx} className={classes.imputBlock}>
									<input
										onChange={checBox}
										className={classes.filterInput}
										type="checkbox"
										name={item}
										value={item}
									/>
									{item}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	});

	const priceList = prices.map((item, id) => {
		return (
			<div key={id} className={classes.filterItem}>
				<div
					onClick={() => {
						choosenFilter === item.category
							? setFilter("")
							: setFilter(item.category);
					}}
					className={classes.filterName}
				>
					{item.category}
					<svg
						className={
							choosenFilter !== item.category
								? classes.filterIcon
								: classes.filterIcon + " " + classes.activeIcon
						}
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="black"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M15 14L10 9L5 14L3 13L10 6L17 13L15 14Z" fill="#EA5F00" />
					</svg>
				</div>
				<div
					className={
						choosenFilter !== item.category
							? classes.subFilter
							: classes.subFilter + " " + classes.activeContent
					}
				>
					<div className={classes.subFilterList}>
						<div className={classes.imputBlock}>
							<input
								onChange={checPrice}
								className={classes.filterInput}
								type="radio"
								name="price"
								value="Любая"
							/>
              Любая
            </div>
						{item.subCategory.map((item, idx) => {
							return (
								<div key={idx} className={classes.imputBlock}>
									<input
										onChange={checPrice}
										className={classes.filterInput}
										type="radio"
										name="price"
										value={item}
									/>
									{item}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	});

	return (
		<div
			className={
				!menuState ? classes.wrapper : classes.wrapper + " " + classes.blur
			}
			onClick={() => {
				closeMenu();
				document.querySelector("body").classList.remove("lock");
			}}
		>
			<div className={classes.productPageText}>
				<h1>{translations[router]}</h1>
			</div>
			<div className={classes.filter}>
				{categoryList}
				{sizeList}
				{priceList}
				<div className={classes.sortBy}>
					Сортировать по:
          <div
						onClick={() => {
							changeSort("по цене");
						}}
						className={
							sortBy !== "по цене"
								? classes.price
								: classes.price + " " + classes.activeSort
						}
					>
						цене
          </div>
					<div
						onClick={() => {
							changeSort("по скидке");
						}}
						className={
							sortBy !== "по скидке"
								? classes.sale
								: classes.sale + " " + classes.activeSort
						}
					>
						скидке
          </div>
				</div>
			</div>
			<div className={classes.productList}>
				{products.map((item, id) => {
					return (
						<ProdBlock style={{ cursor: "pointer" }} key={id} product={item} />
					);
				})}
			</div>
		</div>
	);
};

export default ProductList;

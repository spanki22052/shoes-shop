import classes from "../../styles/productList.module.scss";
import { useDispatch, useSelector, useStore } from "react-redux";
import { closeMenu as close } from "../../modules/actions";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const tagOptions = [
	{
		key: "Important",
		text: "Important",
		value: "Important",
		label: { color: "red", empty: true, circular: true },
	},
];

const categorys = [
	{
		category: 'Категория',
		subCategory: ['Ботинки', 'Кроссовки', 'Туфли', 'Мокасины', 'Кеды', 'Полуботинки', 'Сапоги']
	},
]

const sizes = [
	{
		category: 'Размер',
		subCategory: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]
	}
]

const prices = [
	{
		category: 'Цена',
		subCategory: ['До 3000 рублей', 'От 3000 до 5000 рублей', 'От 5000 рублей']
	}
]

const ProductList = () => {
	const translations = {
		men: "Мужская обувь",
		kids: "Детская обувь",
		women: "Женская обувь",
	};

	const dispatch = useDispatch();
	const menuState = useSelector((state) => state.menu.menuState);
	const closeMenu = () => {
		dispatch(close());
	};
	const router = useRouter().query.id;
	const [choosenFilter, setFilter] = useState('');
	const [choosenCategory, setCategory] = useState('Все');

	const categoryList = categorys.map((item, id) => {
		return (
			<div key={id} className={classes.categoryItem}>
				<div
					onClick={() => {
						choosenFilter === item.category
							? setFilter("")
							: setFilter(item.category);
					}}
					className={classes.categoryTitle}>
					{item.category}
					<svg className={choosenFilter !== item.category
						? classes.categoryIcon
						: classes.categoryIcon + " " + classes.activeIcon} width="20" height="20" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 14L10 9L5 14L3 13L10 6L17 13L15 14Z" fill="black" />
					</svg>
				</div>
				<div
					className={
						choosenFilter !== item.category
							? classes.subCategory
							: classes.subCategory + " " + classes.activeContent
					}>
					<ul className={classes.subCategoryList}>
						<li
							onClick={() => {
								setCategory('Все');
							}}
							className={choosenCategory !== 'Все' ? classes.subCategoryItem : classes.subCategoryItem + ' ' + classes.activeSubCategory}>Все</li>
						{item.subCategory.map((item, idx) => {
							return (
								<li
									key={idx}
									className={choosenCategory !== item ? classes.subCategoryItem : classes.subCategoryItem + ' ' + classes.activeSubCategory}
									onClick={() => {
										setCategory(item);
									}}>{item}</li>
							)
						})}
					</ul>
				</div>
			</div>
		)
	})

	const sizeList = sizes.map((item, id) => {
		return (
			<div key={id} className={classes.filterItem}>
				<div
					onClick={() => {
						choosenFilter === item.category
							? setFilter("")
							: setFilter(item.category);
					}}
					className={classes.filterName}>
					{item.category}
					<svg className={choosenFilter !== item.category
						? classes.filterIcon
						: classes.filterIcon + " " + classes.activeIcon} width="20" height="20" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 14L10 9L5 14L3 13L10 6L17 13L15 14Z" fill="black" />
					</svg>
				</div>
				<div className={choosenFilter !== item.category
					? classes.subFilter
					: classes.subFilter + " " + classes.activeContent}>
					<div className={classes.subFilterList}>
						<div className={classes.russiansize}>Российский размер</div>
						{item.subCategory.map((item, idx) => {
							return (
								<div key={idx} className={classes.imputBlock}><input className={classes.filterInput} type='checkbox' name={item} value={item} />{item}</div>
							)
						})}
					</div>
				</div>
			</div >
		)
	})

	const priceList = prices.map((item, id) => {
		return (
			<div key={id} className={classes.filterItem}>
				<div
					onClick={() => {
						choosenFilter === item.category
							? setFilter("")
							: setFilter(item.category);
					}}
					className={classes.filterName}>
					{item.category}
					<svg className={choosenFilter !== item.category
						? classes.filterIcon
						: classes.filterIcon + " " + classes.activeIcon} width="20" height="20" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 14L10 9L5 14L3 13L10 6L17 13L15 14Z" fill="black" />
					</svg>
				</div>
				<div className={choosenFilter !== item.category
					? classes.subFilter
					: classes.subFilter + " " + classes.activeContent}>
					<div className={classes.subFilterList}>
						{item.subCategory.map((item, idx) => {
							return (
								<div key={idx} className={classes.imputBlock}><input className={classes.filterInput} type='checkbox' name={item} value={item} />{item}</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	})

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
					<div className={classes.price}>
						цене
					</div>
					<div className={classes.sale}>
						скидке
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductList;

import React, { useState } from 'react';
import classes from '../../styles/sidebar.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
	const menuState = useSelector(state => state.menu.menuState);
	const dispatch = useDispatch();
	const [choosenCategoty, setCategory] = useState('');
	// const categorys = ["Мужчинам", "Женщинам", "Детям", "Информационная помощь"]
	const categorys = [
		{
			category: "Мужчинам",
			subcategory: ['Все товары', 'Новинки', 'Распродажа', 'Обувь']
		},
		{
			category: "Женщинам",
			subcategory: ['Все товары', 'Новинки', 'Распродажа', 'Обувь']
		},
		{
			category: "Детям",
			subcategory: ['Все товары', 'Новинки', 'Распродажа', 'Обувь']
		},
		{
			category: "Информаци и помощь",
			subcategory: ['Доставка', 'Гарантия', 'Возврат', 'Таблица размеров']
		}
	]
	const categoryList = categorys.map((item, id) => {
		return (
			<li
				key={id}
				className={classes.sideItem}>
				<div
					onClick={() => { choosenCategoty === item.category ? setCategory('') : setCategory(item.category) }}
					className={choosenCategoty !== item.category ? classes.sideItemTitle : classes.sideItemTitle + ' ' + classes.activeTitle}>
					{item.category}
				</div>
				<div className={choosenCategoty !== item.category ? classes.sideItemContent : classes.sideItemContent + ' ' + classes.activeContent}>
					<ul className={classes.sublist}>
						{item.subcategory.map((item, id) => {
							return (
								<li key={id} className={classes.subitem}>
									{item}
								</li>
							)
						})}
					</ul>
				</div>
			</li>
		)
	})
	return (
		<div className={
			!menuState ?
				classes.sidebar :
				classes.sidebar + " " + classes.active}>
			<ul className={classes.sidelist}>
				{categoryList}
			</ul>
		</div >
	)
}

export default Sidebar;
import React, { useState } from 'react';
import classes from '../../styles/sidebar.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
	const menuState = useSelector(state => state.menu.menuState);
	const dispatch = useDispatch();
	const [choosenCategoty, setCategory] = useState('');
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
			category: "Информация и помощь",
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
					className={choosenCategoty !== item.category ? classes.sidetitle : classes.sidetitle + ' ' + classes.activeTitle}>
					<div
						className={classes.sideItemTitle}>
						{item.category}
					</div>
					<div className={choosenCategoty !== item.category ? classes.sideicon : classes.sideicon + ' ' + classes.activeIcon}>

					</div>
				</div>
				<div className={choosenCategoty !== item.category ? classes.sideItemContent : classes.sideItemContent + ' ' + classes.activeContent}>
					<ul className={classes.sublist}>
						{item.subcategory.map((item, idx) => {
							return (
								<li key={idx} className={classes.subitem}>
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
				<li className={classes.sideItem}>
					<div className={classes.sidetitle}>
						<div
							className={classes.sideItemTitle}>
							Новости
					</div>
					</div>
				</li>
				<li className={classes.sideItem}>
					<div className={classes.sidetitle}>
						<div
							className={classes.sideItemTitle}>
							Акции
					</div>
					</div>
				</li>
				<li className={classes.sideItem}>
					<div className={classes.sidetitle}>
						<div
							className={classes.sideItemTitle}>
							Адреса магазинов
					</div>
					</div>
				</li>
			</ul>
		</div >
	)
}

export default Sidebar;
import React from 'react';
import classes from '../../styles/main.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu as close } from '../../modules/actions';

const Main = () => {
	const dispatch = useDispatch();
	const menuState = useSelector(state => state.menu.menuState);
	const closeMenu = () => {
		dispatch(close());
	}
	return (
		<main onClick={() => {
			closeMenu();
			document.querySelector("body").classList.remove("lock")
		}} className={
			!menuState ?
				classes.main :
				classes.main + ' ' + classes.blur
		}>
		</main >
	)
}

export default Main;
import React from 'react';
import classes from '../../styles/sidebar.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
	const menuState = useSelector(state => state.menu.menuState);
	const dispatch = useDispatch();
	return (
		<div className={
			!menuState ?
				classes.sidebar :
				classes.sidebar + " " + classes.active}>
		</div >
	)
}

export default Sidebar;
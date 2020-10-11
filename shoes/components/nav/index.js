import React from 'react';
import classes from '../../styles/nav.module.scss'
import HamburgerMenu from "react-hamburger-menu";
import { useDispatch, useSelector } from 'react-redux';
import { changeMenuState, closeMenu as close } from '../../modules/actions';

const Header = () => {
	const menuState = useSelector(state => state.menu.menuState);
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(changeMenuState());
	}
	const closeMenu = () => {
		dispatch(close());
	}
	return (
		<div className={classes.nav}>
			<div className={classes.nav__logo}>
				<div className={classes.nav__burger}>
					<HamburgerMenu
						isOpen={menuState}
						menuClicked={handleClick}
						width={30}
						height={16}
						strokeWidth={2}
						rotate={0}
						color='white'
						borderRadius={0}
						animationDuration={0.5}
					/>
				</div>
				<span className={classes.logo}>Обувь <span>Бомба</span></span>
			</div>
			<div className={classes.nav__menu}>
				<div className={classes.nav__contacts}>
					<div className={classes.phone}>
						8-800-555-35-35
					</div>
					<div className={classes.txt}>
						интернет-магази &mdash; круглосуточно
					</div>
				</div>

				<svg onClick={closeMenu} width="30" height="30" viewBox="0 0 30 29" fill='white' xmlns="http://www.w3.org/2000/svg">
					<path d="M10.3361 29C11.4778 29 12.4033 28.0726 12.4033 26.9286C12.4033 25.7846 11.4778 24.8572 10.3361 24.8572C9.19434 24.8572 8.2688 25.7846 8.2688 26.9286C8.2688 28.0726 9.19434 29 10.3361 29Z" />
					<path d="M24.8066 29C25.9483 29 26.8738 28.0726 26.8738 26.9286C26.8738 25.7846 25.9483 24.8572 24.8066 24.8572C23.6649 24.8572 22.7394 25.7846 22.7394 26.9286C22.7394 28.0726 23.6649 29 24.8066 29Z" />
					<path d="M28.941 5.17875H6.01559L5.16804 0.828776C5.11971 0.591314 4.98982 0.37835 4.80096 0.226956C4.6121 0.0755616 4.37624 -0.00467569 4.13443 0.000210703H0V2.07162H3.28687L7.23525 21.9572C7.28357 22.1947 7.41347 22.4076 7.60233 22.559C7.79119 22.7104 8.02705 22.7907 8.26886 22.7858H26.8738V20.7144H9.11641L8.26886 16.5715H26.8738C27.1127 16.5774 27.3463 16.5001 27.5347 16.3528C27.7232 16.2055 27.8549 15.9973 27.9074 15.7637L29.9746 6.44231C30.0092 6.28864 30.0084 6.12907 29.9722 5.97576C29.9361 5.82244 29.8654 5.67942 29.7658 5.55758C29.6661 5.43573 29.54 5.33828 29.3971 5.27263C29.2542 5.20699 29.0982 5.17488 28.941 5.17875ZM26.0469 14.5001H7.87609L6.42904 7.25016H27.649L26.0469 14.5001Z" />
				</svg>
			</div>
		</div >
	)
}

export default Header;
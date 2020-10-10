import React from 'react';
import classes from '../../styles/nav.module.scss'

const Nav = () => {
	return (
		<nav className={classes.nav}>
			<div className={nav__logo}>

			</div>
			<div className={nav__menu}>
				<div className={nav__contacts}>

				</div>
				<div className={nav__cart}>
					<img />
				</div>
			</div>
		</nav>
	)
}
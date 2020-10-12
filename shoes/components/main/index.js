import React from 'react';
import classes from '../../styles/main.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu as close } from '../../modules/actions';
import Slider from "react-slick";

const Main = () => {
	const dispatch = useDispatch();
	const menuState = useSelector(state => state.menu.menuState);
	const closeMenu = () => {
		dispatch(close());
	}
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: `slick-dots`,
		autoplay: true,
		autoplaySpeed: 5000
	};
	return (
		<main onClick={() => {
			closeMenu();
			document.querySelector("body").classList.remove("lock")
		}} className={
			!menuState ?
				classes.main :
				classes.main + ' ' + classes.blur
		}>
			<link
				rel="stylesheet"
				type="text/css"
				charset="UTF-8"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
			/>
			<Slider className={classes.slider} {...settings}>
				<img className={classes.slide} src='https://brammels.com/wp-content/uploads/2015/10/Brogi-2.jpg' />
				<img className={classes.slide} src='https://s0.rbk.ru/v6_top_pics/media/img/3/75/755269987440753.png' />
			</Slider>
			<div className={classes.main__btns}>
				<a href='/' className={classes.btn}>Мужчинам</a>
				<a href='/' className={classes.btn}>Женщинам</a>
				<a href='/' className={classes.btn}>Детям</a>
			</div>
		</main >
	)
}

export default Main;
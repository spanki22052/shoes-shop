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
				<img alt='slide' className={classes.slide} src='https://brammels.com/wp-content/uploads/2015/10/Brogi-2.jpg' />
				<img alt='slide' className={classes.slide} src='https://s0.rbk.ru/v6_top_pics/media/img/3/75/755269987440753.png' />
			</Slider>
			<div className={classes.main__btns}>
				<a href='/' className={classes.btn}>Мужчинам</a>
				<a href='/' className={classes.btn}>Женщинам</a>
				<a href='/' className={classes.btn}>Детям</a>
			</div>
			<div className={classes.main__sale}>
				<div className={classes.salelink}>
					<a href='/'>Женское</a>
					<img src='./arrow.svg'></img>
				</div>
				<div className={classes.salelink}>
					<a href='/'>Мужское</a>
					<img src='./arrow.svg'></img>
				</div>
				<div className={classes.salelink}>
					<a href='/'>Детское</a>
					<img src='./arrow.svg'></img>
				</div>
				<img className={classes.salephoto} src='https://images.unsplash.com/photo-1577538928305-3807c3993047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='sale' />
			</div>
		</main >
	)
}

export default Main;
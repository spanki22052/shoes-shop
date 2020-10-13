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
		autoplay: true,
		autoplaySpeed: 5000,
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
				charSet="UTF-8"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
			/>
			<Slider className={classes.slider} {...settings}>
				<img className={classes.slide} alt='slide' src='./1.jpg' />
				<img className={classes.slide} alt='slide' src='./2.jpg' />
			</Slider>
			<div className={classes.main__btns}>
				<a href='/' className={classes.btn}>Мужчинам</a>
				<a href='/' className={classes.btn}>Женщинам</a>
				<a href='/' className={classes.btn}>Детям</a>
			</div>
			<div className={classes.main__sale}>
				<img className={classes.salephoto} src='https://ak.picdn.net/shutterstock/videos/30741688/thumb/10.jpg' alt='sale' />
				<div className={classes.sale__links}>
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
				</div>
			</div>
			<div className={classes.prodblock}>
				<div className={classes.link}>
					<div className={classes.txt}>
						ЖЕНЩИНАМ
					</div>
					<a href='/' className={classes.allprod}>
						Смотреть все товары
					</a>
				</div>
				<div className={classes.prodlist}>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
				</div>
			</div>
			<Slider className={classes.slider} {...settings}>
				<img className={classes.slide} alt='slide' src='https://m.1obl.ru/upload/resize_cache/iblock/b73/827_465_2/b739c03115a04787958a7a95bb5f377f.jpg' />
				<img className={classes.slide} alt='slide' src='https://www.cpv.ru/uploads/img5cf8e1b3bb537.jpg' />
			</Slider>
			<div className={classes.prodblock}>
				<div className={classes.link}>
					<div className={classes.txt}>
						МУЖЧИНАМ
					</div>
					<a href='/' className={classes.allprod}>
						Смотреть все товары
					</a>
				</div>
				<div className={classes.prodlist}>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
				</div>
			</div>
			<Slider className={classes.slider} {...settings}>
				<img className={classes.slide} alt='slide' src='https://m.1obl.ru/upload/resize_cache/iblock/b73/827_465_2/b739c03115a04787958a7a95bb5f377f.jpg' />
				<img className={classes.slide} alt='slide' src='https://www.cpv.ru/uploads/img5cf8e1b3bb537.jpg' />
			</Slider>
			<div className={classes.prodblock}>
				<div className={classes.link}>
					<div className={classes.txt}>
						ДЕТЯМ
					</div>
					<a href='/' className={classes.allprod}>
						Смотреть все товары
					</a>
				</div>
				<div className={classes.prodlist}>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
				</div>
			</div>
			<Slider className={classes.slider} {...settings}>
				<img className={classes.slide} alt='slide' src='https://m.1obl.ru/upload/resize_cache/iblock/b73/827_465_2/b739c03115a04787958a7a95bb5f377f.jpg' />
				<img className={classes.slide} alt='slide' src='https://www.cpv.ru/uploads/img5cf8e1b3bb537.jpg' />
			</Slider>
			<div className={classes.prodblock}>
				<div className={classes.link}>
					<div className={classes.txt}>
						БЕСТСЕЛЛЕРЫ
					</div>
					<a href='/' className={classes.allprod}>
						Смотреть все товары
					</a>
				</div>
				<div className={classes.prodlist}>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
					<div className={classes.proditem}></div>
				</div>
			</div>
		</main >
	)
}

export default Main;
import React from "react";
import classes from "../../styles/main.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { closeMenu as close } from "../../modules/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import SlideBlock from "./slideBlock";
import slide from "../slide";
import Link from "next/link";


const Main = () => {
	const slideProducts = [
		{
			img:
				"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
			title: "Черные ботинки Fresco",
			price: 3300,
		},
		{
			img:
				"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
			title: "Черные ботинки Fresco",
			price: 3300,
		},
		{
			img:
				"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
			title: "Черные ботинки Fresco",
			price: 3300,
		},
		{
			img:
				"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
			title: "Черные ботинки Fresco",
			price: 3300,
		},
		{
			img:
				"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
			title: "Черные ботинки Fresco",
			price: 3300,
		},
		{
			img:
				"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
			title: "Черные ботинки Fresco",
			price: 3300,
		},
		{
			img:
				"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
			title: "Черные ботинки Fresco",
			price: 3300,
		},
		{
			img:
				"https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
			title: "Черные ботинки Fresco",
			price: 3300,
		},
	];
	const dispatch = useDispatch();
	const menuState = useSelector((state) => state.menu.menuState);
	const closeMenu = () => {
		dispatch(close());
	};
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		adaptiveHeight: true,
		className: classes.slider,
	};

	useEffect(() => {
		[
			".secondSlider",
			".thirdSlider",
			".fourthSlider",
			".fifthSlider",
		].map((el) => slide(document.querySelector(el)));
	}, []);

	return (
		<main
			onClick={() => {
				closeMenu();
				document.querySelector("body").classList.remove("lock");
			}}
			className={!menuState ? classes.main : classes.main + " " + classes.blur}
		>
			<Slider className={classes.slider} {...settings}>
				<img
					className={classes.slide}
					alt="slide"
					src="https://m.1obl.ru/upload/resize_cache/iblock/b73/827_465_2/b739c03115a04787958a7a95bb5f377f.jpg"
				/>
				<img
					className={classes.slide}
					alt="slide"
					src="https://brammels.com/wp-content/uploads/2015/10/Brogi-2.jpg"
				/>
			</Slider>
			<div className={classes.main__btns}>
				<Link href="/catalog/men">
					<a className={classes.btn}>
						Мужчинам
       		 </a>
				</Link>
				<Link href="/catalog/women">
					<a className={classes.btn}>
						Женщинам
       			 </a>
				</Link>
				<Link href="/catalog/kids">
					<a className={classes.btn}>
						Детям
       			 </a>
				</Link>
			</div>
			<div className={classes.main__sale}>
				<img
					className={classes.salephoto}
					src="https://ak.picdn.net/shutterstock/videos/30741688/thumb/10.jpg"
					alt="sale"
				/>
				<div className={classes.sale__links}>
					<div className={classes.salelink}>
						<a href="/">Женское</a>
						<img src="./arrow.svg"></img>
					</div>
					<div className={classes.salelink}>
						<a href="/">Мужское</a>
						<img src="./arrow.svg"></img>
					</div>
					<div className={classes.salelink}>
						<a href="/">Детское</a>
						<img src="./arrow.svg"></img>
					</div>
				</div>
			</div>
			<div className={classes.prodblock}>
				<div className={classes.link}>
					<div className={classes.txt}>ЖЕНЩИНАМ</div>
					<a href="/" className={classes.allprod}>
						Смотреть все товары
          </a>
				</div>
				<div className={classes.prodlist + " secondSlider"}>
					{slideProducts.map((item, id) => {
						return <SlideBlock item={item} key={id} />;
					})}
				</div>
			</div>
			<Slider className={classes.slider} {...settings}>
				<img
					className={classes.slide}
					alt="slide"
					src="https://m.1obl.ru/upload/resize_cache/iblock/b73/827_465_2/b739c03115a04787958a7a95bb5f377f.jpg"
				/>
				<img
					className={classes.slide}
					alt="slide"
					src="https://brammels.com/wp-content/uploads/2015/10/Brogi-2.jpg"
				/>
			</Slider>
			<div className={classes.prodblock}>
				<div className={classes.link}>
					<div className={classes.txt}>МУЖЧИНАМ</div>
					<a href="/" className={classes.allprod}>
						Смотреть все товары
          </a>
				</div>
				<div className={classes.prodlist + " thirdSlider"}>
					{slideProducts.map((item, id) => {
						return <SlideBlock item={item} key={id} />;
					})}
				</div>
			</div>
			<Slider className={classes.slider} {...settings}>
				<img
					className={classes.slide}
					alt="slide"
					src="https://m.1obl.ru/upload/resize_cache/iblock/b73/827_465_2/b739c03115a04787958a7a95bb5f377f.jpg"
				/>
				<img
					className={classes.slide}
					alt="slide"
					src="https://brammels.com/wp-content/uploads/2015/10/Brogi-2.jpg"
				/>
			</Slider>
			<div className={classes.prodblock}>
				<div className={classes.link}>
					<div className={classes.txt}>ДЕТЯМ</div>
					<a href="/" className={classes.allprod}>
						Смотреть все товары
          </a>
				</div>
				<div className={classes.prodlist + " fourthSlider"}>
					{slideProducts.map((item, id) => {
						return <SlideBlock item={item} key={id} />;
					})}
				</div>
			</div>
			<Slider className={classes.slider} {...settings}>
				<img
					className={classes.slide}
					alt="slide"
					src="https://m.1obl.ru/upload/resize_cache/iblock/b73/827_465_2/b739c03115a04787958a7a95bb5f377f.jpg"
				/>
				<img
					className={classes.slide}
					alt="slide"
					src="https://brammels.com/wp-content/uploads/2015/10/Brogi-2.jpg"
				/>
			</Slider>
			<div className={classes.prodblock}>
				<div className={classes.link}>
					<div className={classes.txt}>БЕСТСЕЛЛЕРЫ</div>
					<a href="/" className={classes.allprod}>
						Смотреть все товары
          </a>
				</div>
				<div className={classes.prodlist + " fifthSlider"}>
					{slideProducts.map((item, id) => {
						return <SlideBlock item={item} key={id} />;
					})}
				</div>
			</div>
		</main>
	);
};

export default Main;

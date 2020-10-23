import React from 'react';
import classes from '../../styles/cart.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { closeMenu as close } from "../../modules/actions";
import CartBlock from './cartBlock';

const byField = (field) => {
	return (a, b) => a[field] > b[field] ? 1 : -1;
}

const CartPage = () => {
	const dispatch = useDispatch();
	const menuState = useSelector((state) => state.menu.menuState);
	const cartProducts = useSelector((state) => state.data.cartItems);
	const closeMenu = () => {
		dispatch(close());
	};
	let total = 0;
	cartProducts.map((item) => {
		return total = total + item.price * item.amount;
	})
	const products = [
		{
			img: "https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
			title: "Черные ботинки Fresco",
			price: 3300,
			sizes: [39, 40, 41, 42, 43, 44, 45, 46],
			new: true,
			color: 'коричневый',
			amount: 1
		},
		{
			img: "https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
			title: "Черные ботинки Fresco",
			price: 3300,
			sizes: [39, 40, 41, 42, 43, 44, 45, 46],
			new: true,
			color: 'коричневый',
			amount: 1
		},
		{
			img: "https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
			title: "Черные ботинки Fresco",
			price: 3300,
			sizes: [39, 40, 41, 42, 43, 44, 45, 46],
			new: true,
			color: 'коричневый',
			amount: 1
		}
	]

	return (
		<div
			onClick={() => {
				closeMenu();
				document.querySelector("body").classList.remove("lock");
			}}
			className={!menuState ? classes.cart : classes.cart + ' ' + classes.blur}>
			<div className={classes.cartTitle}>
				Корзина
			</div>
			<div className={classes.cartContent}>
				<div className={classes.cartItems}>
					{cartProducts.sort(byField('title')).map((item, id) => {
						return <CartBlock prod={item} key={id} />
					})}
				</div>
				<div className={classes.cartInfo}>
					<div className={classes.cartSum}>
						<span className={classes.sumTitle}>Сумма заказа:</span>
						<span className={classes.sumNum}>{total} Р</span>
					</div>
					<div className={classes.cartFinalSum}>
						<span className={classes.finalSum}>Итоговая сумма:</span>
						<span className={classes.finalSumNum}>18 590 Р</span>
					</div>
					<a className={classes.cartButton}>Перейти к оформлению заказа</a>
				</div>
			</div>
		</div>
	)
}

export default CartPage;
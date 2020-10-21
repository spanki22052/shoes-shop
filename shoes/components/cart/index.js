import React from 'react';
import classes from '../../styles/cart.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { closeMenu as close } from "../../modules/actions";


const CartPage = () => {
	const dispatch = useDispatch();
	const menuState = useSelector((state) => state.menu.menuState);
	const closeMenu = () => {
		dispatch(close());
	};
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
					<div className={classes.cartItem}>

					</div>
					<div className={classes.cartItem}>

					</div>
					<div className={classes.cartItem}>

					</div>
				</div>
				<div className={classes.cartInfo}>
					<div className={classes.cartSum}>
						<span className={classes.sumTitle}>Сумма заказа:</span>
						<span className={classes.sumNum}>19 990 Р</span>
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
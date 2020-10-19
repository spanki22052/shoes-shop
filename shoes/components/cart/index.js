import React from 'react';
import classes from '../../styles/cart.module.scss';

const CartPage = () => {
	return (
		<div className={classes.cart}>
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
						<span className={classes.sumNum}>19 990</span>
					</div>
					<div className={classes.cartFinalSum}>
						<span className={classes.finalSum}>Итоговая сумма:</span>
						<span className={classes.finalSumNum}>18 590</span>
					</div>
					<a className={classes.cartButton}>Перейти к оформлению заказа</a>
				</div>
			</div>
		</div>
	)
}

export default CartPage;
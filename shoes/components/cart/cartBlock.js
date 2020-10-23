import React, { useState } from 'react';
import { CardDeck } from 'react-bootstrap';
import classes from '../../styles/cartBlock.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCard } from '../../modules/actions';


const CartBlock = ({ prod }) => {

	const dispatch = useDispatch();
	const [itemSize, changeItemSize] = useState('');
	const [choosenSize, changeSize] = useState(41);
	const [amount, setAmount] = useState(1);
	const changeAmount = (event) => {
		setAmount(event.target.value);
	}
	return (
		<div className={classes.cartProd}>
			<div className={classes.prodCont}>
				<div className={classes.prodImg}>
					<img src={prod.img[0]} />
				</div>
				<div className={classes.prodTitle}>
					{prod.title}
					<span className={classes.prodColor}>{prod.color}</span>
				</div>
			</div>
			<div className={classes.prodInfo}>
				<div
					onClick={() => {
						itemSize === prod.title ?
							changeItemSize('') :
							changeItemSize(prod.title)
					}}
					className={classes.sizeBlock}>
					<div className={classes.prodSize}>
						{choosenSize}
						<svg
							className={itemSize !== prod.title ? '' : classes.activeIcon}
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="#b8b8b8"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M15 14L10 9L5 14L3 13L10 6L17 13L15 14Z" fill="#b8b8b8" />
						</svg>
					</div>
					<div className={itemSize !== prod.title ? classes.sizeSub : classes.sizeSub + ' ' + classes.active}>
						{prod.sizes.map((item, id) => {
							return (
								<div
									onClick={() => changeSize(item)}
									key={id}
									className={choosenSize !== item ? classes.size : classes.size + ' ' + classes.activeSize}
								>{item}</div>
							)
						})}
					</div>
				</div>
				<div className={classes.prodAmount}>
					<span className={amount === 1 ? '' : classes.active} onClick={() => { amount === 1 ? setAmount(1) : setAmount(parseInt(amount) - 1) }}>-</span>
					<input type='text' value={amount} onChange={changeAmount} />
					<span className={amount === 5 ? '' : classes.active} onClick={() => { amount === 5 ? setAmount(5) : setAmount(parseInt(amount) + 1) }}>+</span>
				</div>
				<div className={classes.prodPrice}>
					{prod.price} P
				</div>
				<div
					onClick={() => { dispatch(deleteFromCard(prod.productCode)) }}
					className={classes.prodRemove}>
				</div>
			</div>
		</div >
	)
}

export default CartBlock;
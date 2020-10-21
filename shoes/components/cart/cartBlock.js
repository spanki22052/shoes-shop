import React, { useState } from 'react';
import { CardDeck } from 'react-bootstrap';
import classes from '../../styles/cartBlock.module.scss';

const CartBlock = ({ prod }) => {
	const [itemSize, changeItemSize] = useState('');
	const [choosenSize, changeSize] = useState(41);
	return (
		<div className={classes.cartProd}>
			<div className={classes.prodCont}>
				<div className={classes.prodImg}>
					<img src={prod.img} />
				</div>
				<div className={classes.prodTitle}>
					{prod.title}
					<span className={classes.prodColor}>{prod.color}</span>
				</div>
			</div>
			<div
				onClick={() => {
					itemSize === prod.title ?
						changeItemSize('') :
						changeItemSize(prod.title)
				}}
				className={classes.prodInfo}>
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
								className={classes.size}
							>{item}</div>
						)
					})}
				</div>
				<div className={classes.prodAmount}>

				</div>
				<div className={classes.prodPrice}>

				</div>
				<div className={classes.prodRemove}>

				</div>
			</div>
		</div >
	)
}

export default CartBlock;
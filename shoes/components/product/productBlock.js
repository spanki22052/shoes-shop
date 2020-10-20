import React from 'react';
import classes from '../../styles/prodBlock.module.scss';

const ProdBlock = ({ product }) => {
	return (
		<div className={classes.product}>
			<div className={classes.freeBlock}>

			</div>
			<div className={classes.prodImgBlock}>
				<img src={product.img} className={classes.prodImg} />
				<span className={product.new ? classes.prodBadge : classes.displayNone}>
					Новинка
				</span>
			</div>
			<div className={classes.prodInfo}>
				<div className={classes.prodTitle}>
					{product.title}
				</div>
				<div className={classes.prodPrice}>
					{product.price} P
					</div>
			</div>
		</div>
	)
}

export default ProdBlock;
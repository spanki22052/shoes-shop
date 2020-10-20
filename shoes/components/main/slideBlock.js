import React from 'react';
import classes from '../../styles/slideBlock.module.scss';

const SlideBlock = ({ item }) => {
	return (
		<div className={classes.proditem}>
			<div className={classes.prodImgBlock}>
				<img src={item.img} className={classes.prodImg} />
				<span className={classes.prodBadge}>
					Новинка
				</span>
			</div>
			<div className={classes.prodInfo}>
				<div className={classes.prodTitle}>
					{item.title}
				</div>
				<div className={classes.prodPrice}>
					{item.price} P
				</div>
			</div>
		</div>
	)
}

export default SlideBlock;
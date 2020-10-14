import React from 'react';
import classes from '../../styles/footer.module.scss';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.footer__content}>
				<div className={classes.contacts}>
					<div className={classes.phonesBlock}>
						<div className={classes.phones}>
							<div className={classes.phoneTitle}>
								Интернет-магазин
							</div>
							<div className={classes.phoneNumber}>
								8-800-555-35-35
							</div>
							<div className={classes.phoneSub}>
								круглосуточно
							</div>
						</div>
						<div className={classes.phones}>
							<div className={classes.phoneTitle}>
								Поддержка покупателей
							</div>
							<div className={classes.phoneNumber}>
								8-800-555-35-35
							</div>
							<div className={classes.phoneSub}>
								с 9:00 до 21:00
							</div>
						</div>
					</div>
					<div className={classes.social}>
						<div className={classes.socialTitle}>
							Подписывайтесь на нас в соц.сетях и следите за новостями и акциями
						</div>
						<div className={classes.socialIcons}>

						</div>
					</div>
					<div className={classes.cards}>
						<div className={classes.cardTitle}>
							Мы принимаем
						</div>
						<div className={classes.cardcons}>

						</div>
					</div>
				</div>
				<div className={classes.info}>

				</div>
			</div>
			<div className={classes.footer__end}>

			</div>
		</footer>
	)
}

export default Footer
import React from 'react';
import classes from '../../styles/footer.module.scss';

const Footer = () => {
	const categorys = [
		{
			category: "О КОМПАНИИ",
			subcategory: ['История компании', 'Контакты', 'Правовая информация', 'Вакансии']
		},
		{
			category: "ПОКУПАТЕЛЯМ",
			subcategory: ['Оплата', 'Доставка', 'Возврат', 'Гарантия', 'Обработка данных']
		},
		{
			category: "Детям",
			subcategory: ['Все товары', 'Новинки', 'Распродажа', 'Обувь']
		},
		{
			category: "Информация и помощь",
			subcategory: ['Доставка', 'Гарантия', 'Возврат', 'Таблица размеров']
		}
	]
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
							Социальные сети:
						</div>
						<img src='./instagram.svg'></img>
					</div>
					<div className={classes.cards}>
						<div className={classes.cardTitle}>
							Мы принимаем
						</div>
						<div className={classes.cardcons}>
							<img src='./visa.svg' />
							<img src='./mastercard.svg' />
						</div>
					</div>
				</div>
				<div className={classes.info}>
					<ul className={classes.category}>
						<li className={classes.categoryItem}>
							<div className={classes.categoryTitle}>
								О КОМПАНИИ
								<div className={classes.categoryIcon}>
								</div>
							</div>
							<div className={classes.subBlock}>
								<ul className={classes.subCategory}>
									<li className={classes.subCategoryItem}>
										История компании
									</li>
									<li className={classes.subCategoryItem}>
										Контакты
									</li>
									<li className={classes.subCategoryItem}>
										Правовая информация
									</li>
									<li className={classes.subCategoryItem}>
										Вакансии
									</li>
								</ul>
							</div>
						</li>
						<li className={classes.categoryItem}>
							<div className={classes.categoryTitle}>
								ПОКУПАТЕЛЯМ
								<div className={classes.categoryIcon}>

								</div>
							</div>
							<div className={classes.subBlock}>
								<ul className={classes.subCategory}>
									<li className={classes.subCategoryItem}>
										Оплата
									</li >
									<li className={classes.subCategoryItem}>
										Доставка
									</li>
									<li className={classes.subCategoryItem}>
										Возврат
									</li>
									<li className={classes.subCategoryItem}>
										Гарантия
									</li>
									<li className={classes.subCategoryItem}>
										Обработка данных
									</li>
								</ul>
							</div>
						</li>
						<li className={classes.categoryItem}>
							<div className={classes.categoryTitle}>
								ПАРТНЕРАМ
								<div className={classes.categoryIcon}>

								</div>
							</div>
							<div className={classes.subBlock}>
								<ul className={classes.subCategory}>
									<li className={classes.subCategoryItem}>
										Поставщикам
									</li>
									<li className={classes.subCategoryItem}>
										Стать партнером
									</li>
									<li className={classes.subCategoryItem}>
										Рекламные материалы
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className={classes.footer__end}>
				<div className={classes.rules}>
					© 2020 RALF RINGER. Все права защищены.
				</div>
				<div className={classes.dev}>
					Разработка сайта: spanki, vgvsshi
				</div>
			</div>
		</footer>
	)
}

export default Footer
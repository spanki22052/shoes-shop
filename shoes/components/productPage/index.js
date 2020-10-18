import classes from "../../styles/productPage.module.scss";
import { useDispatch, useSelector, useStore } from "react-redux";
import { closeMenu as close } from "../../modules/actions";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default () => {
  const router = useRouter().query.id;
  const product = {
    title: "Черные ботинки",
    description:
      "Новая модель черных ботинок выполнена в насыщенном черном цвете. Демисезонные туфли выполнены из натуральной кожи, имеют удобную колодку и стандартную полноту. Отличный вариант для деловых встреч и торжественных мероприятий, хорошо сочетаются с брюками и подходят на каждый день.",
    firstPrice: 3500,
    secondPrice: 3000,
    images: [
      "https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
      "https://static.ralf.ru/upload/resize_cache/iblock/ef4/750_9999_1/ef40a89e13ee12ffe592280f37110596.jpg",
      "https://static.ralf.ru/upload/iblock/b25/b25cc92eca9624b2fb564cdcf7622cbd.jpg",
    ],
    isDiscount: true,
    sizes: [35, 36, 37, 38, 39],
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.photosHolder}>
        {product.images.map((el, index) => {
          return <img key={index} src={el} alt="product" />;
        })}
      </div>
      <img src={product.images[2]} className={classes.bigPhoto} />
      <div className={classes.productInfo}>
        <h1>{product.title}</h1>
      </div>
    </div>
  );
};

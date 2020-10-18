import classes from "../../styles/productPage.module.scss";
import { useDispatch, useSelector, useStore } from "react-redux";
import { closeMenu as close } from "../../modules/actions";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Form } from "react-bootstrap";

export default () => {
  const router = useRouter().query.id;
  const [sizeOpen, setSize] = useState(false);
  const product = {
    title: "Черные ботинки Fresco",
    description:
      "Новая модель черных ботинок выполнена в насыщенном черном цвете. Демисезонные туфли выполнены из натуральной кожи, имеют удобную колодку и стандартную полноту. Отличный вариант для деловых встреч и торжественных мероприятий, хорошо сочетаются с брюками и подходят на каждый день.",
    price: 3300,
    discountSize: 10,
    images: [
      "https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
      "https://static.ralf.ru/upload/resize_cache/iblock/ef4/750_9999_1/ef40a89e13ee12ffe592280f37110596.jpg",
      "https://static.ralf.ru/upload/iblock/b25/b25cc92eca9624b2fb564cdcf7622cbd.jpg",
    ],
    isDiscount: true,
    sizes: [35, 36, 37, 38, 39],
    productCode: "101999k",
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
        <span className={classes.productCode}>
          Код продута: {product.productCode}
        </span>

        <div className={classes.priceBlock}>
          <span className={classes.firstPrice}>{product.price}RUB</span>
          <span className={classes.secondPrice}>
            {product.isDiscount === true
              ? product.price -
                (product.price * product.discountSize) / 100 +
                "RUB"
              : ""}
          </span>
          <span className={classes.discount}>
            {product.isDiscount === true
              ? "-" + product.discountSize + "%"
              : ""}
          </span>
        </div>
        <div
          className={classes.selectorHolder}
          onClick={() => setSize(!sizeOpen)}
        >
          <div className={classes.dropdown}>
            <span>{product.sizes[0]}</span>
            <div
              className={
                sizeOpen
                  ? classes.downDropdown + " " + classes.active
                  : classes.downDropdown
              }
            >
              {product.sizes.map((el, index) => {
                return (
                  <div className={classes.pHolder} key={index}>
                    <p>{el}</p>
                  </div>
                );
              })}
            </div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 15L25 27.5L37.5 15L42.5 17.5L25 35L7.5 17.5L12.5 15Z"
                fill="#EB5D00"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

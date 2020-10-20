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

  const [currentPhoto, setPhoto] = useState(product.images[0]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.photosHolder}>
        {product.images.map((el, index) => {
          return (
            <img
              onClick={() => setPhoto(el)}
              key={index}
              src={el}
              alt="product"
            />
          );
        })}
      </div>
      <img src={currentPhoto} className={classes.bigPhoto} />
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
        <div className={classes.selectorHolder}>
          <div className={classes.dropdown} onClick={() => setSize(!sizeOpen)}>
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
              className={sizeOpen ? classes.rotate : classes.rot}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 15L25 27.5L37.5 15L42.5 17.5L25 35L7.5 17.5L12.5 15Z"
                fill="#EB5D00"
              />
            </svg>
          </div>
          <button>
            <svg
              width="30"
              height="30"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 12V9.05C25 8.13075 24.8189 7.22049 24.4672 6.37121C24.1154 5.52194 23.5998 4.75026 22.9497 4.10025C22.2997 3.45024 21.5281 2.93463 20.6788 2.58284C19.8295 2.23106 18.9193 2.05 18 2.05C17.0807 2.05 16.1705 2.23106 15.3212 2.58284C14.4719 2.93463 13.7003 3.45024 13.0503 4.10025C12.4002 4.75026 11.8846 5.52194 11.5328 6.37121C11.1811 7.22049 11 8.13075 11 9.05V16.05C11 16.3152 11.1054 16.5696 11.2929 16.7571C11.4804 16.9446 11.7348 17.05 12 17.05C12.2652 17.05 12.5196 16.9446 12.7071 16.7571C12.8946 16.5696 13 16.3152 13 16.05V14H21V12H13V9.05C13 7.72392 13.5268 6.45215 14.4645 5.51447C15.4021 4.57678 16.6739 4.05 18 4.05C19.3261 4.05 20.5979 4.57678 21.5355 5.51447C22.4732 6.45215 23 7.72392 23 9.05V16C23 16.2652 23.1054 16.5196 23.2929 16.7071C23.4804 16.8946 23.7348 17 24 17C24.2652 17 24.5196 16.8946 24.7071 16.7071C24.8946 16.5196 25 16.2652 25 16V14H30V32H6V14H9V12H4V32.09C4 32.5966 4.20123 33.0824 4.55943 33.4406C4.91762 33.7988 5.40344 34 5.91 34H30.09C30.5966 34 31.0824 33.7988 31.4406 33.4406C31.7988 33.0824 32 32.5966 32 32.09V12H25Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className={classes.descriptionBlock}>
          <h1>Описание</h1>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

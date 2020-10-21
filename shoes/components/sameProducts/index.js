import classes from "../../styles/sameproducts.module.scss";
import { useEffect } from "react";
import slide from "../slide";

export default () => {
  const products = [
    {
      title: "Черные ботинки Fresco",
      description:
        "Новая модель черных ботинок выполнена в насыщенном черном цвете. Демисезонные туфли выполнены из натуральной кожи, имеют удобную колодку и стандартную полноту. Отличный вариант для деловых встреч и торжественных мероприятий, хорошо сочетаются с брюками и подходят на каждый день.",
      price: 3300,
      discountSize: 10,
      color: "коричневый",
      images: [
        "https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
        "https://static.ralf.ru/upload/resize_cache/iblock/ef4/750_9999_1/ef40a89e13ee12ffe592280f37110596.jpg",
        "https://static.ralf.ru/upload/iblock/b25/b25cc92eca9624b2fb564cdcf7622cbd.jpg",
      ],
      isDiscount: true,
      sizes: [35, 36, 37, 38, 39],
      productCode: "101999k",
    },
    {
      title: "Черные ботинки Fresco",
      description:
        "Новая модель черных ботинок выполнена в насыщенном черном цвете. Демисезонные туфли выполнены из натуральной кожи, имеют удобную колодку и стандартную полноту. Отличный вариант для деловых встреч и торжественных мероприятий, хорошо сочетаются с брюками и подходят на каждый день.",
      price: 3300,
      discountSize: 10,
      color: "коричневый",
      images: [
        "https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
        "https://static.ralf.ru/upload/resize_cache/iblock/ef4/750_9999_1/ef40a89e13ee12ffe592280f37110596.jpg",
        "https://static.ralf.ru/upload/iblock/b25/b25cc92eca9624b2fb564cdcf7622cbd.jpg",
      ],
      isDiscount: true,
      sizes: [35, 36, 37, 38, 39],
      productCode: "101999k",
    },
    {
      title: "Черные ботинки Fresco",
      description:
        "Новая модель черных ботинок выполнена в насыщенном черном цвете. Демисезонные туфли выполнены из натуральной кожи, имеют удобную колодку и стандартную полноту. Отличный вариант для деловых встреч и торжественных мероприятий, хорошо сочетаются с брюками и подходят на каждый день.",
      price: 3300,
      discountSize: 10,
      color: "коричневый",
      images: [
        "https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
        "https://static.ralf.ru/upload/resize_cache/iblock/ef4/750_9999_1/ef40a89e13ee12ffe592280f37110596.jpg",
        "https://static.ralf.ru/upload/iblock/b25/b25cc92eca9624b2fb564cdcf7622cbd.jpg",
      ],
      isDiscount: true,
      sizes: [35, 36, 37, 38, 39],
      productCode: "101999k",
    },
    {
      title: "Черные ботинки Fresco",
      description:
        "Новая модель черных ботинок выполнена в насыщенном черном цвете. Демисезонные туфли выполнены из натуральной кожи, имеют удобную колодку и стандартную полноту. Отличный вариант для деловых встреч и торжественных мероприятий, хорошо сочетаются с брюками и подходят на каждый день.",
      price: 3300,
      discountSize: 10,
      color: "коричневый",
      images: [
        "https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
        "https://static.ralf.ru/upload/resize_cache/iblock/ef4/750_9999_1/ef40a89e13ee12ffe592280f37110596.jpg",
        "https://static.ralf.ru/upload/iblock/b25/b25cc92eca9624b2fb564cdcf7622cbd.jpg",
      ],
      isDiscount: true,
      sizes: [35, 36, 37, 38, 39],
      productCode: "101999k",
    },
    {
      title: "Черные ботинки Fresco",
      description:
        "Новая модель черных ботинок выполнена в насыщенном черном цвете. Демисезонные туфли выполнены из натуральной кожи, имеют удобную колодку и стандартную полноту. Отличный вариант для деловых встреч и торжественных мероприятий, хорошо сочетаются с брюками и подходят на каждый день.",
      price: 3300,
      discountSize: 10,
      color: "коричневый",
      images: [
        "https://static.ralf.ru/upload/resize_cache/iblock/039/750_9999_1/039b21d23fa29065f512595d88f600f0.jpg",
        "https://static.ralf.ru/upload/resize_cache/iblock/ef4/750_9999_1/ef40a89e13ee12ffe592280f37110596.jpg",
        "https://static.ralf.ru/upload/iblock/b25/b25cc92eca9624b2fb564cdcf7622cbd.jpg",
      ],
      isDiscount: true,
      sizes: [35, 36, 37, 38, 39],
      productCode: "101999k",
    },
  ];

  useEffect(() => {
    const slider = document.querySelector(".phot");

    slide(slider);
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1>ПОХОЖИЕ ТОВАРЫ</h1>

      <div className={classes.productsBlock + " phot"}>
        {products.map((el, index) => {
          return (
            <div key={index} className={classes.productBlock}>
              <img src={el.images[0]} />
              <h2>{el.title}</h2>
              <h1>{el.price}р</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

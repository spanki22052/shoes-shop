import classes from "../../styles/product.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import cyrillicToTranslit from "cyrillic-to-translit-js";
import firebase from "firebase";

export default () => {
  let mnState = useSelector((state) => state.data);
  const [arrow, setArrow] = useState(false);
  const [menuState, setMenu] = useState(mnState);
  const [currentInfo, setInfo] = useState(
    menuState.categoryList[0].subcategory[0].title
  );
  const [productInput, setProduct] = useState({
    category: "",
    amount: 1,
    description: "",
    img: "",
    isSale: false,
    new: false,
    price: "",
    productCode: "",
    sale: 0,
    title: "",
  });
  const [podcategoryToAdd, setPodcategory] = useState({
    categoryEmpty: false,
    categoryId: 0,
  });

  console.log(productInput);

  var subArray = [];

  const categoryList = menuState.categoryList;
  categoryList.map((element) => {
    element.subcategory.map((el) => {
      subArray = [...subArray, el.title];
    });
  });
  return (
    <div className={classes.wrapper}>
      <form
        className={classes.mainHolder}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={classes.dropdown} onClick={() => setArrow(!arrow)}>
          <svg
            className={arrow ? classes.rotated : ""}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 14L10 9L5 14L3 13L10 6L17 13L15 14Z" fill="#EA5F00" />
          </svg>
          <p className={classes.current}>{currentInfo}</p>

          <div
            className={
              arrow
                ? classes.dropdownElements + " " + classes.dropped
                : classes.dropdownElements
            }
          >
            {subArray.map((el, index) => {
              return (
                <p
                  key={index}
                  onClick={() => {
                    setInfo(el);
                    setPodcategory({
                      categoryEmpty: false,
                      categoryId: index,
                    });
                  }}
                >
                  {el}
                </p>
              );
            })}
          </div>
        </div>
        <input
          placeholder="Введите название продукта"
          value={productInput.title}
          type="text"
          onChange={(e) => {
            let newObj = { ...productInput };
            newObj["title"] = e.target.value;
            setProduct(newObj);
          }}
        />
        <input
          placeholder="Введите описание продукта"
          value={productInput.description}
          type="text"
          onChange={(e) => {
            let newObj = { ...productInput };
            newObj["description"] = e.target.value;
            setProduct(newObj);
          }}
        />
        <input
          placeholder="Введите цену на продукт"
          value={productInput.price}
          type="text"
          onChange={(e) => {
            let newObj = { ...productInput };
            newObj["price"] = e.target.value;
            setProduct(newObj);
          }}
        />
        <input
          placeholder="Введите ссылки на фото (через пробел)"
          value={productInput.img}
          type="text"
          onChange={(e) => {
            let newObj = { ...productInput };
            newObj["img"] = e.target.value;
            setProduct(newObj);
          }}
        />
        <input
          placeholder="Скидка %"
          value={productInput.sale}
          className={productInput.isSale ? classes.displayed : ""}
          type="text"
          onChange={(e) => {
            let newObj = { ...productInput };
            newObj["sale"] = e.target.value;
            setProduct(newObj);
          }}
        />
        <div className={classes.buttonsHolder}>
          <button
            className={productInput.isSale ? classes.active : ""}
            onClick={() => {
              let newObj = { ...productInput };
              newObj["isSale"] = !newObj.isSale;
              setProduct(newObj);
            }}
          >
            Скидка
          </button>
          <button
            className={productInput.new ? classes.active : ""}
            onClick={() => {
              let newObj = { ...productInput };
              newObj["new"] = !newObj.new;
              setProduct(newObj);
            }}
          >
            Новый
          </button>
        </div>
        <input type="submit" value="Добавить" />
      </form>
    </div>
  );
};

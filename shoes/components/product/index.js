import classes from "../../styles/product.module.scss";
import { useDispatch, useSelector, useStore } from "react-redux";
import { closeMenu as close } from "../../modules/actions";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const tagOptions = [
  {
    key: "Important",
    text: "Important",
    value: "Important",
    label: { color: "red", empty: true, circular: true },
  },
];

const Product = () => {
  const translations = {
    men: "Мужская обувь",
    kids: "Детская обувь",
    women: "Женская обувь",
  };

  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.menu.menuState);
  const closeMenu = () => {
    dispatch(close());
  };
  const router = useRouter().query.id;
  const [dropdownOpen, setDropdown] = useState(false);
  return (
    <div
      className={
        !menuState ? classes.wrapper : classes.wrapper + " " + classes.blur
      }
      onClick={() => {
        closeMenu();
        document.querySelector("body").classList.remove("lock");
      }}
    >
      <div className={classes.productPageText}>
        <h1>{translations[router]}</h1>
      </div>
      <div className={classes.elementsHolder}>
        <div
          className={classes.dropDown}
          onClick={() => setDropdown(!dropdownOpen)}
        >
          <p className={classes.categoriesText}>Категории</p>
          <div
            className={
              dropdownOpen
                ? classes.dropdown + " " + classes.active
                : classes.dropdown
            }
          >
            <p>Макасины</p>
            <p>Кроссовки</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

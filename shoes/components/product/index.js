import classes from "../../styles/product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu as close } from "../../modules/actions";
import { useRouter } from "next/router";
import Link from "next/link";

const Catalog = () => {
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
    </div>
  );
};

export default Catalog;

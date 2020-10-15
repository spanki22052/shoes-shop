import classes from "../../styles/product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu as close } from "../../modules/actions";
import { useRouter } from "next/router";
import Link from "next/link";
import { Dropdown, Input, Icon } from "semantic-ui-react";

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

      <Icon disabled name="users" />

      <Dropdown text="" multiple icon="filter">
        <Dropdown.Menu>
          <Input icon="search" iconPosition="left" className="search" />
          <Dropdown.Divider />
          <Dropdown.Header icon="tags" content="Tag Label" />
          <Dropdown.Menu scrolling>
            {tagOptions.map((option) => (
              <Dropdown.Item key={option.value} {...option} />
            ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Product;

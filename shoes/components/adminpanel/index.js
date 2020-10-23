import classes from "../../styles/adminpanel.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase";
import AddCategory from "./addCategory";
import AddProduct from "./addProduct";

export default () => {
  const router = useRouter();
  const [currentState, setState] = useState("1");

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("YAS");
      } else {
        router.push("/");
      }
    });
  }, []);

  return (
    <div className={classes.wrapper}>
      <span className={classes.welcome}>Добро пожаловать</span>
      <div className={classes.buttonsBlock}>
        <button onClick={() => setState("1")}>Добавить категорию</button>
        <button onClick={() => setState("2")}>Добавить продукт</button>
      </div>
      {currentState === "1" && <AddCategory />}
      {currentState === "2" && <AddProduct />}
      <a href="#" onClick={() => firebase.auth().signOut()}>Выйти из админ панели</a>
    </div>
  );
};

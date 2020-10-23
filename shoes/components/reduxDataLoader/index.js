import firebase from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { categoryLoaded, emptyCategoryLoaded, productLoaded } from "../../modules/actions";
import { useEffect } from "react";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase
      .collection("shoes-store")
      .doc("categories")
      .get()
      .then((el) => {
          dispatch(categoryLoaded(el.data().categoriesList))
          dispatch(emptyCategoryLoaded(el.data().emptyCategories))
      });
	firebase
      .collection("shoes-store")
      .doc("products")
      .get()
      .then((el) => {
          dispatch(productLoaded(el.data().productsList));
      });
  }, []);

 return <></>;
};

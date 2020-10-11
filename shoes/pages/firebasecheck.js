import { useEffect } from "react";
import firebase from "../components/firebase";

export default () => {
  useEffect(() => {
    firebase
      .firestore()
      .collection("shoes-store")
      .doc("categories")
      .get()
      .then((el) => console.log(el.data()));
  });
  return <></>;
};

import classes from "../../styles/adminpanel.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";
import firebase from "firebase";

export default () => {
  const router = useRouter();
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
    <>
      <a style={{ position: "absolute", top: "110px"}} href="#" onClick={() => firebase.auth().signOut()}>
        Log out
      </a>{" "}
    </>
  );
};

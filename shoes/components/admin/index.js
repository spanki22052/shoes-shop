import firebase from "firebase";
import { useState } from "react";
import classes from "../../styles/admin.module.scss";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const checkPass = (login, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(login, password)
      .then((el) => {
        router.push("/adminpanel");
      })
      .catch((err) => {
        console.log(err);
        setPassword("");
        setError("Ошибка, неверный email или пароль");
      });
  };

  return (
    <div className={classes.wrapper}>
      <h1>Вход в админ панель</h1>

      <div className={classes.inputBlock}>
        <p>email</p>
        <input value={login} onChange={(e) => setLogin(e.target.value)} />
      </div>
      <div className={classes.inputBlock}>
        <p>пароль</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <p className={classes.error}>{error}</p>

      <button
        onClick={() => {
          checkPass(login, password);
        }}
      >
        войти
      </button>
    </div>
  );
};

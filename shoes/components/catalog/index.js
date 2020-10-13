import styles from "../../styles/catalog.module.scss";

export default () => {
  return (
    <div className={styles.wrapper}>
      <h1>Каталог</h1>

      <div className={styles.photosHolder}>
          <div className={styles.photoBlock}>
              <img src='/man.jpg' alt='man' />
              <h1>Мужчинам</h1>
          </div>
      </div>
    </div>
  );
};

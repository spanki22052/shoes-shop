import classes from "../../styles/podcategory.module.scss";
import { useState } from "react";

export default () => {
  const [arrow, setArrow] = useState(false);
  const [currentInfo, setInfo] = useState('Выберите категорию')

  return (
    <div className={classes.wrapper}>
      <span className={classes.infoBlock}>Добавление подкатегории</span>

      <form className={classes.mainHolder} onSubmit={() => console.log("s")}>
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
            <p>Element</p>
            <p>Element</p>
            <p>Element</p>
            <p>Element</p>
            <p>Element</p>
            <p>Element</p>
            <p>Element</p>
          </div>
        </div>
        <input placeholder="Название подкатегории" />
      </form>
    </div>
  );
};

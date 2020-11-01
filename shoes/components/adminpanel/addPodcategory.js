import classes from "../../styles/podcategory.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import cyrillicToTranslit from "cyrillic-to-translit-js";

export default () => {
  const [arrow, setArrow] = useState(false);
  let mnState = useSelector((state) => state.data);
  const [menuState, setMenu] = useState(mnState);
  const [currentInfo, setInfo] = useState(menuState.categoryList[0].category);
  const [podcategoryInput, setInput] = useState("");
  const [podcategoryToAdd, setPodcategory] = useState({
    categoryEmpty: false,
    categoryId: 0,
  });

  const emptyCategory = menuState.emptyCategoryList;
  const categoryList = menuState.categoryList;

  const sendPodcategory = (podcategoryToAdd) => {
    let podInput = podcategoryInput;
    let url = cyrillicToTranslit().transform(podcategoryInput);
    let newObj = { ...menuState };
    let newCategoryList = newObj.categoryList[podcategoryToAdd.categoryId];
    let newCategorys = newObj.categoryList;

    const productList = !podcategoryToAdd.categoryEmpty
      ? [...menuState.categoryList]
      : [...menuState.emptyCategoryList];

    let newSubcategory = !podcategoryToAdd.categoryEmpty
      ? [
          ...productList[podcategoryToAdd.categoryId].subcategory,
          {
            url: `/catalog/${url}`,
            title: podInput[0].toUpperCase() + podInput.toLowerCase().slice(1),
          },
        ]
      : [
          {
            url: `/catalog/${url}`,
            title: podInput[0].toUpperCase() + podInput.toLowerCase().slice(1),
          },
        ];
    newCategoryList["subcategory"] = newSubcategory;
    newCategorys.splice(podcategoryToAdd.categoryId, 1);
    newCategorys = [...newCategorys, newCategoryList];
    newObj["categoryList"] = newCategorys;
    setMenu(newObj);
    console.log(menuState);
    console.log(newObj);
    setInput("");
  };

  return (
    <div className={classes.wrapper}>
      <span className={classes.infoBlock}>Добавление подкатегории</span>

      <form
        className={classes.mainHolder}
        onSubmit={(e) => {
          podcategoryInput.length > 3 && sendPodcategory(podcategoryToAdd);
          e.preventDefault();
        }}
      >
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
            {categoryList.map((el, index) => {
              return (
                <p
                  key={index}
                  onClick={() => {
                    setInfo(el.category);
                    setPodcategory({
                      categoryEmpty: false,
                      categoryId: index,
                    });
                  }}
                >
                  {el.category}
                </p>
              );
            })}
            {emptyCategory.map((el, index) => {
              return (
                <p
                  key={index}
                  onClick={() => {
                    setInfo(el.title);
                    setPodcategory({
                      categoryEmpty: true,
                      categoryId: index,
                    });
                  }}
                >
                  {el.title}
                </p>
              );
            })}
          </div>
        </div>
        <input
          placeholder="Введите название подкатегории"
          value={podcategoryInput}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Добавить" />
      </form>
    </div>
  );
};

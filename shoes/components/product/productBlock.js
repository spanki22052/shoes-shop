import React from "react";
import Link from "next/link";
import classes from "../../styles/prodBlock.module.scss";
import { useRouter } from "next/router";


const ProdBlock = ({ product }) => {
		const router = useRouter().query;
		console.log(router);
  return (
    <Link href={'/product/' + product.productCode}>
	<div className={classes.product}>
        <div className={classes.freeBlock}></div>
        <div className={classes.prodImgBlock}>
          <img src={product.img[0]} className={classes.prodImg} />
          <span
            className={product.new ? classes.prodBadge : classes.displayNone}
          >
            Новинка
          </span>
        </div>
        <div className={classes.prodInfo}>
          <div className={classes.prodTitle}>{product.title}</div>
          <div className={classes.prodPrice}>{product.price} P</div>
          <ul className={classes.prodSizes}>
            {product.sizes.map((item, id) => {
              if (product.sizes[product.sizes.length - 1] === item) {
                return (
                  <li key={id} className={classes.prodSize}>
                    {item}
                  </li>
                );
              }
              return (
                <li key={id} className={classes.prodSize}>
                  {item},
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default ProdBlock;

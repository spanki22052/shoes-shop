import classes from "../../styles/productList.module.scss";
import { useDispatch, useSelector, useStore } from "react-redux";
import { closeMenu as close } from "../../modules/actions";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default () => {
  const router = useRouter().query.id;
  return (
    <>
      <h1>Hello from {router} page</h1>
    </>
  );
};

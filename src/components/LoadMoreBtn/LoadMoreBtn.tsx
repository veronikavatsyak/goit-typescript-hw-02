import s from "./LoadMoreBtn.module.css";
import React from "react";
import { FC } from "react";

interface LoadMore {
  click: () => void;
}
const LoadMoreBtn: FC<LoadMore> = ({ click }) => {
  return (
    <button className={s.loadBtn} onClick={click} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;

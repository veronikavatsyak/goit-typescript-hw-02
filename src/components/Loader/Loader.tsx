import { ThreeDots } from "react-loader-spinner";
import s from "./Loader.module.css";
import React from "react";
function Loader() {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperClass={s.loader}
    />
  );
}
export default Loader;

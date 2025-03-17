import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ click }) => {
  return (
    <button className={s.loadBtn} onClick={click} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;

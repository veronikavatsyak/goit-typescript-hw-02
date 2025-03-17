import toast from "react-hot-toast";
import { useState } from "react";
import s from "./SearchBar.module.css";
const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast.error("The field cannot be empty!");
      return;
    }
    onSubmit(value);
    e.target.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          className={s.searchInput}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.searchBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

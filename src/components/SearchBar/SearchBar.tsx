import toast from "react-hot-toast";
import React, { FormEvent, useState } from "react";
import s from "./SearchBar.module.css";
import { FC } from "react";

interface OnSubmit {
  onSubmit: (newQuery: string) => void;
}
const SearchBar: FC<OnSubmit> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast.error("The field cannot be empty!");
      return;
    }
    onSubmit(value);
    setValue("");
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

import React, { useContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getBooks } from "../../store/slices/books";

import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { books, isLoading } = useAppSelector((state) => state.booksSlice);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");

  const searchKeywordHandler = (e: any) => {
    e.preventDefault();
    if (query === "") {
      dispatch(getBooks("new"));
    } else {
      dispatch(getBooks(`search/${query}`));
    }
  };
  return (
    <form className="searchBar_box" onSubmit={searchKeywordHandler}>
      <FiSearch size={"2em"} />
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;

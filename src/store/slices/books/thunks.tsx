import axios from "axios";
import { setBooks, starLoadingBooks } from "./booksSlices";

export const getBooks = (query: string) => {
  return async (dispatch:any, getState:any) => {
    dispatch(starLoadingBooks(true));
    const books = await axios.get(`https://api.itbook.store/1.0/${query}`);

    if (books.status) {
      dispatch(starLoadingBooks(false));
      dispatch(setBooks(books.data.books));
    }
  };
};

import { createSlice } from "@reduxjs/toolkit";
import { BooksInterface } from "../../../interfaces/models/books";

export interface BooksState {
  books: BooksInterface[];
  isLoading: boolean;
}

const initialState: BooksState = {
  books: [],
  isLoading: false,
};

export const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    starLoadingBooks: (state, action) => {
      state.isLoading = action.payload;
    },
    setBooks: (state, action) => {
      state.books = action.payload
    },
  },
});

export const { starLoadingBooks, setBooks } = booksSlice.actions;
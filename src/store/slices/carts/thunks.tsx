import toast from 'react-hot-toast';
import apiCart from "../../../api/api";
import { getBooksCard } from "./CartSlice";



export const getBookCard = (token: any) => {
  return async (dispatch: any, getState: any) => {
    const books = await apiCart.getCart(token);
    dispatch(getBooksCard(books))
  };
};

export const addBookCard = (book:any, token: any) => {
  return async (dispatch: any, getState: any) => {
    const books = await apiCart.addBookToCart(book,token);    
    console.log(books);
    toast.success(`${books.title} added to Cart`);
    dispatch(getBooksCard(books))
  };
};

export const deleteBookCard = (product:any, token: any) => {
  return async (dispatch: any, getState: any) => {
    console.log(product);
    
    const books = await apiCart.deleteBookFromCart(product,token);
    dispatch(getBooksCard(books))
  };
};
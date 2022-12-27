import { createSlice } from "@reduxjs/toolkit";
import { BooksInterface } from "../../../interfaces/models/books";
import { Interface } from "readline";
/* import toast from 'react-hot-toast'; */
import apiCart from "../../../api/api";

export interface cartItems {
  name: string;
  qty: number;
  isbn13:string
}

export interface CardState {
  cartState: boolean;
  cartItems: cartItems[];
  cartTotalAmount: number;
  cartTotalQantity: number;
}

const initialState: CardState = {
  cartState: false,
  cartItems: [],
  cartTotalAmount: 0,
  cartTotalQantity: 0,
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    getBooksCard: (state, action) => {
      state.cartItems = action.payload.products;
      state.cartTotalAmount = action.payload.total;
    },

    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setAddItemToCart: (state, action) => {
      const book = {
        product: action.payload.id,
        title: action.payload.title,
        subtitle: action.payload.text,
        image: action.payload.img,
        price: action.payload.price,
        qty: 1,
      };
      const token = action.payload.token;

      const itemIndex = state.cartItems.findIndex(
        (item: cartItems) => item.isbn13 === action.payload.isbn
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
        book.qty = state.cartItems[itemIndex].qty;
        /* toast.success(`Se incremento ${action.payload.title}`); */
      } else {
        const temp = { ...action.payload, qty: 1 };

        state.cartItems.push(temp);
        /* toast.success(`${action.payload.title} added to Cart`); */
      }

      console.log("==================book....==================");
      console.log(state.cartItems[itemIndex]);
      console.log("====================================");
      const addBook = async (book: any, token: string) => {
        try {
          const data = await apiCart.addBookToCart(book, token);
        } catch (error: any) {
          console.error(error.message);
        }
      };

      addBook(book, token);

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item: any) => item.product !== action.payload.isbn
      );

      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      /* const deleteBook = async (id, token) => {
        try {
          const data = await apiCart.deleteBookFromCart(id, token);
        } catch (error) {
          console.error(error.message);
        }
      }; */

      /* deleteBook(action.payload.isbn, action.payload.token); */

      /* toast.success(`${action.payload.title} Removed From Cart`); */
    },

    setIncreaseItemQTY: (state, action) => {
      const book = {
        product: action.payload.book.isbn,
        title: action.payload.book.title,
        subtitle: action.payload.book.text,
        image: action.payload.book.img,
        price: action.payload.book.price,
        qty: 1,
      };

      console.log("====================================");
      console.log(action);
      console.log("====================================");

      const token = action.payload.token;

      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.product === action.payload.book.product
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty = action.payload.newqty;
        book.qty = state.cartItems[itemIndex].qty;

        console.log(state.cartItems);

        /*  toast.success(`Se incremento ${action.payload.title}`); */
      }

      /* const addBook = async (book, token) => {
        try {
          const data = await apiCart.addBookToCart(book, token);
        } catch (error) {
          console.error(error.message);
        }
      }; */

      /* addBook(book, token); */
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setDecreaseItemQTY: (state, action) => {
      const book = {
        product: action.payload.isbn,
        title: action.payload.title,
        subtitle: action.payload.text,
        image: action.payload.img,
        price: action.payload.price,
        qty: 1,
      };

      const token = action.payload.token;

      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.isbn === action.payload.isbn
      );

      if (state.cartItems[itemIndex].qty > 1) {
        state.cartItems[itemIndex].qty -= 1;
        book.qty = state.cartItems[itemIndex].qty;
        /* toast.success(`Se decremento ${action.payload.title}`); */
      }
      const addBook = async (book: any, token: any) => {
        try {
          const data = await apiCart.addBookToCart(book, token);
        } catch (error: any) {
          console.error(error.message);
        }
      };

      addBook(book, token);

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setClearCartItems: (state, action) => {
      const token = action.payload;

      state.cartItems = [];
      const removeAllBooks = async (token: any) => {
        try {
          const data = await apiCart.closeCart(token);
        } catch (error: any) {
          console.error(error.message);
        }
        /* toast.success(`Cart Cleared`); */
      };

      removeAllBooks(token);

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setGetTotals: (state) => {
      console.log("contando.....");

      let totalPrice = 0;
      let totalQty = 0;
      state.cartItems.map((item: any) => {
        console.log(item);

        const { price, qty } = item;
        let total = parseInt(price) * qty;
        totalPrice += total;
        totalQty += qty;
      });
      state.cartTotalAmount = totalPrice;
      state.cartTotalQantity = totalQty;
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setGetTotals,
  getBooksCard,
} = cartSlice.actions;

/* export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQantity; */

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../services/booksSlice";
import { booksSlice } from "./slices/books";
import { cartSlice } from "./slices/carts/CartSlice";
import { counterSlice } from "./slices/counter";
import { userSlice } from "./slices/user";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    booksSlice: booksSlice.reducer,
    userSlice: userSlice.reducer,
    cartSlice: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

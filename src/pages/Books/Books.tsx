import Card from "../../components/Card/Card";
import { useGetBooksQuery } from "../../services/booksSlice";
import { BooksInterface } from "../../interfaces/models/books";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { getBooks } from "../../store/slices/books";
import BarLoader from "react-spinners/ClipLoader";
import { setUser } from "../../store/slices/user";
import { setGetTotals } from "../../store/slices/carts/CartSlice";
const Books = () => {
  const { books, isLoading } = useAppSelector((state) => state.booksSlice);
  const { nombre } = useAppSelector((state) => state.userSlice);
  const { cartItems, cartTotalAmount } = useAppSelector((state) => state.cartSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks("new"));
  }, []);
  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems]);

  return (
    <div className="product_container">
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BarLoader color={"#000000"} loading={true} size={150} />
        </div>
      ) : (
        books?.map((book: BooksInterface, i: number) => (
          <Card book={book} key={i} />
        ))
      )}
    </div>
  );
};

export default Books;
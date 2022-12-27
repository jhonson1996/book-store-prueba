import { useKeycloak } from "@react-keycloak/web";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { BooksInterface } from "../../interfaces/models/books";
import { setGetTotals } from "../../store/slices/carts/CartSlice";
import { getBookCard } from "../../store/slices/carts/thunks";

const Card = ({ book }: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { keycloak, initialized } = useKeycloak();
  const { books } = useAppSelector((state) => state.booksSlice);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(setGetTotals());
      dispatch(getBookCard(localStorage.getItem('token')));
    }
  }, [])

  const onAddToCart = () => {
    const itemBook = {
      product: book.isbn13,
      title: book.title,
      subtitle: book.subtitle,
      image: book.image,
      price: parseInt(book?.price.toString().slice(1)),
      qty: 1
    };
    let indexItem = books.findIndex(
      (item: BooksInterface) => item.isbn13 === itemBook.product
    );
    /* if (indexItem >= 0) {
      books[indexItem].qty = 
    } */
    console.log("🚀 ~ file: Card.tsx:25 ~ onAddToCart ~ indexItem", indexItem)


    /* let token = localStorage.getItem('token')
    dispatch(addBookCard(itemBook, token ));
    console.log('añadido.....', itemBook); */

  };

  return (
    <div className="supply-product">
      <p onClick={() => navigate(`/books/${book.isbn13}`)}>
        <img src={book.image} className="product-image" alt="img" />
        <h2 className="product-title">{book.title.substr(0, 20)}</h2>
      </p>
      <h2 className="product-subtitle">Subtitulo: {book.subtitle ? (<span>{book.subtitle.substr(0, 12)}</span>) : 'N/A'} </h2>
      <h2 className="product-isbn">ISBN: {book.isbn13}</h2>
      <div className="price-container">
        <h2 className="product-price">{book.price}</h2>
      </div>
      <button
        onClick={() => {
          onAddToCart();
        }}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default Card;

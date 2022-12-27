import { useKeycloak } from '@react-keycloak/web';
import React from 'react'
import { Image } from 'react-bootstrap'
import ReactStars from 'react-stars'
import { useAppDispatch } from '../../hooks/redux';
import { setIncreaseItemQTY, setRemoveItemFromCart } from '../../store/slices/carts/CartSlice';
import { addBookCard, deleteBookCard } from '../../store/slices/carts/thunks';

export const CardBasket = ({ book }: any) => {
  const dispatch = useAppDispatch();
  const { keycloak } = useKeycloak();
  const {
    product,
    title,
    text,
    img,
    price,
    cartQuantity,
  } = book;

  const deleteBook = () => {
    let token = localStorage.getItem('token')
    dispatch(
      deleteBookCard(product, token)
    );
  };

  console.log('libreee',);
  

  const changeQty = (e: any, book: any) => {
     e.preventDefault();
    const item = {
      product: book.product,
      title: book.title,
      subtitle: book.subtitle,
      image: book.image,
      price: parseInt(book?.price.toString().slice(1)),
      qty:e.target.value
    };
    let token = localStorage.getItem('token')
   dispatch(addBookCard(item, token ));
    console.log('fucionee.....',item);
  }
  return (
    <div className="basket-item" >
      <div className="item-info-wrap">
        <div className="item-img">
          <Image src={book?.image} rounded={true} className="item-img" alt='Dan Abramov' />
        </div>
        <div className="item-info">
          <h2>{book?.title}</h2>
          <div className="price-wrap">
            <span className="price">ISBN: {book?.isbn ? book?.isbn : "N/A"}</span>
          </div>
          <ReactStars
            size={24}
            color2={"#ffc754"}
            value={parseInt(book?.rating)}
          />
          <div className="price-wrap">
            <span className="price">${parseInt(book?.price)}</span>
          </div>
        </div>
      </div>
      <div className="item-checkout-info">
        <div className="Qty">
          <label htmlFor="Qty_1">Cantidad</label>
          <select id="Qty_1" className="Qty-select input-sm"  onChange={(e) => changeQty(e, book)} name="quantity" >
            <option value={1} >1</option>
            <option value={2} >2</option>
            <option value={3} >3</option>
            <option value={4} >4</option>
            <option value={5} >5</option>
            <option value={6} >6</option>
            <option value={7} >7</option>
          </select>
        </div>
        <span className="price-total">${parseInt(book?.price) * book.qty}</span>
        <button className="btn-delete" onClick={deleteBook}>Eliminar</button>
      </div>
    </div>
  )
}

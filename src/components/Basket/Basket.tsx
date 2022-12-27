import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import cartItemsIcon from '../../assets/basketIcon.svg'
import Card from "../Card/Card";
import { setGetTotals, setIncreaseItemQTY, setRemoveItemFromCart } from "../../store/slices/carts/CartSlice";
import { CardBasket } from "../CardBasket/CardBasket";
import { getBookCard } from "../../store/slices/carts/thunks";
import { useKeycloak } from "@react-keycloak/web";



export default function Basket() {
  const { cartItems, cartTotalAmount, } = useAppSelector((state) => state.cartSlice);
  const [total, setTotal] = useState(0)
  const dispatch = useAppDispatch();
  const { keycloak } = useKeycloak();

  useEffect(() => {
    
    dispatch(setGetTotals());
    dispatch(getBookCard(localStorage.getItem('token')));
  }, [])
  
  console.log('aqui----',cartTotalAmount);


  return (
    <div className="basket-page">
      <h1 className="basket-page-title">Tus Libros</h1>
      <div className="basket-items-wrap">
        <div className="basket-header">
          <h2>Detalles de tu cesta</h2>
        </div>
        {
          cartItems?.map((book: any, i: number) => (
            <CardBasket book={book} key={i} />
          ))
        }
      </div>
      <div className="basket-totals-wrap">
        <div className="basket-totals">
          <dl className="delivery-text">
            <dt>Gastos de envío</dt>
            <dd>GRATIS</dd>
          </dl>
          <dl className="delivery-text">
            <dt>Total Productos</dt>
            <dd>{cartItems.length}</dd>
          </dl>
          <dl className="total">
            <dt>Total a Pagar</dt>
            <dd>${Math.floor(cartTotalAmount)}</dd>
          </dl>
          <Link to="/payments">
            <button
              /* onClick={handleSearch} */
              aria-label="Search"
              className="header-search-btn"
              type="submit"
            >
              <span className="text">Comprar</span>
            </button>
          </Link>
        </div>
        <div className="basket-checkout-btn-wrap"></div>
      </div>
    </div>

  )
}
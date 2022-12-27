import ReactStars from 'react-stars'
import {
  Image,
} from "react-bootstrap";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setIncreaseItemQTY } from '../../store/slices/carts/CartSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const DetailContent = ({ data }:any) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cartSlice);
  const [qty, setQty] = useState<{qty: number}>()

  useEffect(() => {
    if (data?.isbn13) {
      setQty(cartItems?.find((item:any) => item?.product === data?.isbn13?.qty))
    }
  }, [data])
  useEffect(() => {
    console.log('==================find==================');
    console.log(cartItems );
    console.log('====================================');
  }, [qty])



  const changeQty = (e: any, book: any) => {
    e.preventDefault();
    dispatch(setIncreaseItemQTY({ book, newqty: e.target.value }))
  }
  return (
    <div className="container-detail-item">
      <div className="container-detail-img">
        <Image className="img" src={data?.image} alt={data?.title} fluid />
      </div>
      <div className="container-detail-data">
        <h2>{data?.title}</h2>

        <div>
          <div className="attribute" >
            <span >
              Autor:
            </span>
            <span className="attribute-des">
              {data?.authors}
            </span>
          </div>
          <div className="attribute">
            <span >
              Editorial:
            </span>
            <span className="attribute-des">
              {data?.publisher}
            </span>
          </div>
          <div className="attribute">
            <span >
              ISBN:
            </span>
            <span className="attribute-des">
              {data?.isbn13}
            </span>
          </div>
          <div className="attribute">
            <span >
              Año de Publicacion:
            </span>
            <span className="attribute-des">
              {data?.year}
            </span>
          </div>
          <div className="attribute">
            <span >
              Precio:
            </span>
            <span className="attribute-des">
              {data?.price}
            </span>
          </div>
          <div className="attribute">
            <span >
              Descripcion:
            </span>
            <span className="attribute-des">
              {data?.desc}
            </span>
          </div>
          <div>
            <ReactStars
              size={24}
              color2={"#ffc754"}
              value={parseInt(data?.rating)}
            />
          </div>
        </div>
        <div className="Qty-content">
          <h3>CANTIDAD</h3>
          <div >
            <select id="Qty_1" className="Qty-select-detail" value={qty?.qty} onChange={(e) => changeQty(e, "book")} name="quantity" >
              <option defaultValue="1" >1</option>
              <option defaultValue="2" >2</option>
              <option defaultValue="3" >3</option>
              <option defaultValue="4" >4</option>
              <option defaultValue="5" >5</option>
              <option defaultValue="6" >6</option>
              <option defaultValue="7" >7</option>
            </select>
            <Link to="/payments">
              <button
                /* onClick={handleSearch} */
                aria-label="Search"
                className="detail-pay-btn"
                type="submit"
              >
                <span className="text">Add to Card</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailContent
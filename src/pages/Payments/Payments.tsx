import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import PaymentForm from '../../components/Payments/PaymentsFrom';
import axios from 'axios';

const stripePromise = loadStripe("pk_test_51HvnNeL30FHPDItuIKCjXY5WvLhj3LpF8hINA05zGAQr5eBfJBjB853s0YIF8Q4qXTRcc3yzDR84nDrQGySudPq50041BZ5aU9");

const PaymentPage = () => {

  const { cartTotalAmount }= useAppSelector((state:any) => state.cartSlice);
  const [clientSecret, setClientSecret] = useState('')
  const navigate = useNavigate();


  useEffect(() => {
    axios.post('http://localhost:4242/create-payment-intent', { items: [{ id: "xl-tshirt" }] })
      .then(function (response) {

        console.log(response.data.clientSecret);
        setClientSecret(response.data.clientSecret)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  const appearance = {
    theme: 'flat',
  };
  const options:any = {
    clientSecret,
    appearance,
  };


  return (
    <section className="contain-payment">
      <button
        className="bg-indigo-300 px-4 py-3 mb-8 rounded cursor-pointer hover:scale-105"
        onClick={() => navigate(-1)}
      >
        Regresar al Carrito
      </button>

      {clientSecret !== '' && <Elements stripe={stripePromise} options={options}>
        <PaymentForm />
      </Elements>}


    </section>
  );
};

export default PaymentPage;

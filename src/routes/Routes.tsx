import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Books from "../pages/Books/Books";
import BooksDetails from "../pages/BooksDetails/BooksDetails";
import CartUser from "../pages/CartUSer/CartUser";
import Checkout from "../pages/Checkout/Checkout";
import Login from "../pages/Login/Login";
import { Container } from "react-bootstrap";
import ProfileUser from "../pages/PerfilUser/ProfileUser";
import Basket from "../components/Basket/Basket";
import PaymentPage from "../pages/Payments/Payments";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" element={<Books />} />
          <Route
            path="/books"
            element={
              /* <PrivateRoute> */
                <Books />
              /* </PrivateRoute> */
            }
          />
          <Route path="/books/:book_id" element={<BooksDetails />} />
          <Route path="/users/:user_id" element={<ProfileUser />} />
          <Route path="/users/:user_id/cart" element={<Basket />} />
          <Route path="/checkout/:user_id" element={<Checkout />} />
          <Route path="/payments" element={<PaymentPage />}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;

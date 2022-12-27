import React from "react";
import Footer from "../Footer/Footer";

import HeaderSearch from "../HeaderSearch/HeaderSearch";

const Layout = ({ children }: any) => {
  return (
    <div className="contain-main">
      <HeaderSearch />
      <div className="section">
        {children}
      </div>
      {/* <h1>hola</h1> */}
      <Footer/>
    </div>
  );
};

export default Layout;

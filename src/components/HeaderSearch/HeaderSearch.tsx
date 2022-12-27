import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import profilePlaceHolder from "../../assets/profile-placeholder.png";
import { getBooks } from "../../store/slices/books";
import { useKeycloak } from "@react-keycloak/web";
import { Image } from "react-bootstrap";
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { setUser } from "../../store/slices/user";


function HeaderSearch() {
  const { keycloak, initialized }: any = useKeycloak();
  const dispatch = useAppDispatch();
  const { avatar } = useAppSelector((state) => state.userSlice);
  const { cartItems } = useAppSelector((state) => state.cartSlice);
  const [token, setToken] = useState(null)
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (keycloak.token) {
      let data = {
        data: keycloak.tokenParsed,
        token: keycloak.token
      }
      dispatch(setUser(data))
      localStorage.setItem('token', keycloak.token);
    }

  }, [keycloak.token]);

  /* console.log('aquiii',cartTotalQantity); */
  

 

  function handleSearch(e: any) {
    e.preventDefault();
    if (query === "") {
      dispatch(getBooks("new"));
    } else {
      dispatch(getBooks(`search/${query}`));
    }
  }

  const handleInput = (e: any) => {
    e.preventDefault();

    setQuery(e.target.value);
  };

  const handleLogout = () => {
    keycloak.logout();

    /* alert.success('Logout successful!'); */
  };

  const handleLogin = () => {
    keycloak.login();
    /* alert.success('Logout successful!'); */
  };

  return (
    <header className="primary-wrap">
      <NavLink
        className="nav-home"
        to="/"
        onClick={() => dispatch(getBooks("new"))}
      >
        <img
          className="nav-icon"
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          alt="H"
        />
        <span>Home</span>
      </NavLink>

      <div className="search-wrap">
        <img
          src="https://i0.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?fit=1200%2C1200&ssl=1&w=640"
          alt="go"
          className="search-icon"
        />

        <input
          type="text"
          placeholder="Search for books by keyword / title / author / ISBN"
          name="search"
          className="text-input"
          onChange={handleInput}
        />

        <button
          onClick={handleSearch}
          aria-label="Search"
          className="header-search-btn"
          type="submit"
        >
          <span className="text">Search</span>
        </button>
      </div>
      {keycloak.authenticated ? (
        <div className="contain-icon">
          <NavLink className="nav-profile" to="/users/:user_id">
            <Image src={avatar} rounded={false} className="avatar" alt='Dan Abramov' />
            Profile
            <img
              className="nav-icon member-star"
              src="http://simpleicon.com/wp-content/uploads/star.png"
              alt="#"
            />
          </NavLink>
          <NavLink className="card-number" to={`/users/${keycloak.tokenParsed.sid}/cart`}>
            <FaShoppingCart size={'25px'} />
            <div className="nav-card">cart</div>
            <span className="card-number-icon">
              {cartItems.length}
            </span>
          </NavLink>
          <NavLink to={"#"} className="nav-home" onClick={handleLogout}>
            <img
              className="nav-icon"
              src="https://icons-for-free.com/iconfiles/png/512/logout-1324760598547500271.png"
              alt="<-"
            />
            <span>Logout</span>
          </NavLink>
        </div>
      ) : (
        <NavLink className="nav-join" onClick={handleLogin} to={"#"}>
          <img className="nav-icon" src={profilePlaceHolder} alt="I" />
          <span>Sign in</span>
        </NavLink>
      )}
    </header>
  );
}

export default HeaderSearch;

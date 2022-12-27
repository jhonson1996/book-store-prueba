import { Link } from "react-router-dom";/* 
import { Container } from "react-bootstrap"; */
import SearchBar from "../SearchBar/SearchBar";
import { UserService } from "../../keycloak";
import { useKeycloak } from "@react-keycloak/web";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getBooks } from "../../store/slices/books";

const Header = () => {
  const { keycloak, initialized } = useKeycloak();
  const dispatch = useAppDispatch();
  const { nombre } = useAppSelector((state) => state.userSlice);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" onClick={()=>dispatch(getBooks('new'))} className="logo">
          <h4>E-Books</h4>
        </Link>
        <div className="search_header">
          <SearchBar />
        </div>
        <div className="icon_Sopping_box">
          {/* <Link to={"/basket"} className="button_nav">
              cart
            </Link>
            <Link to={"/favorite"} className="button_nav">
              sing
            </Link> */}
          <p
            onClick={() => keycloak.login()}
            className="button_nav"
          >
            Login
          </p>
          <p
            onClick={() => keycloak.logout()}
            className="button_nav"
          >
            Logout
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;

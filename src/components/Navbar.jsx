import Logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import Wrapper from "../assets/wrappers/Navbar";

const Nav = () => {
  const { openSidebar } = useProductsContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={Logo} alt="Comfy sloth" />
          </Link>
          <button className="nav-toggle" onClick={openSidebar} type="button">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout">checkout</Link>
          </li>
        </ul>
        <CartButtons />
      </div>
    </Wrapper>
  );
};

export default Nav;

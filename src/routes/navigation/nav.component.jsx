import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import  CrwnLogo  from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Nav = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <object type="image/svg+xml" data={CrwnLogo}>Logo</object>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;

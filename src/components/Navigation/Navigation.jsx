import "./Navigation.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import closebtn from "../../assets/mobile/close.svg";
import menubtnNotLoggedIn from "../../assets/mobile/menu-not-logged-in.svg";
import menubtnLoggedIn from "../../assets/mobile/menu-logged-in.svg";

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`nav ${isMobileMenuOpen ? "nav--open" : ""}`}>
      {!isMobile ? (
        // <div className="nav__top">
        <>
          <h1 className="nav__logo">NewsExplorer</h1>
          <div className="nav__links">
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
            <NavLink to="/saved-news" className="nav__link">
              Saved articles
            </NavLink>
            <button className="header__auth-btn">Sign In</button>
          </div>
        </>
      ) : (
        //  </div>
        <div className="nav__top">
          <h1 className="nav__logo">NewsExplorer</h1>
          <button
            type="button"
            className="nav__mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <img src={closebtn} alt="close menu" />
            ) : (
              <img src={menubtnNotLoggedIn} alt="menu" />
            )}
          </button>
        </div>
      )}
      {/* </div> */}
      {isMobile && isMobileMenuOpen && (
        <>
          <div className="mobile-menu">
            <NavLink className="mobile-menu__home-link" to="/">
              Home
            </NavLink>
            <button type="button" className="mobile-menu__auth-btn">
              Sign in
            </button>
          </div>
        </>
      )}
    </nav>
  );
}
export default Navigation;

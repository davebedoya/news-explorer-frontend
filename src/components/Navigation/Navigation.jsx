import "./Navigation.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import closebtn from "../../assets/mobile/close.svg";
import menubtnNotLoggedIn from "../../assets/mobile/menu-not-logged-in.svg";
import menubtnLoggedIn from "../../assets/mobile/menu-logged-in.svg";

function Navigation({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isLoggedIn,
  setIsLoggedIn,
  onLoginClick,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="nav">
      {!isMobile ? (
        <>
          <h1 className="nav__logo">NewsExplorer</h1>
          <div className="nav__links">
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
            <NavLink to="/saved-news" className="nav__link">
              Saved articles
            </NavLink>
            <button className="header__auth-btn" onClick={onLoginClick}>
              Sign In
            </button>
          </div>
        </>
      ) : (
        <div className="nav__top">
          <h1 className="nav__logo">NewsExplorer</h1>
          <button
            type="button"
            className="nav__mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img
              src={isMobileMenuOpen ? closebtn : menubtnNotLoggedIn}
              alt={isMobileMenuOpen ? "close menu" : "menu"}
            />
          </button>
        </div>
      )}
      {isMobile && isMobileMenuOpen && (
        <>
          <div
            className="nav__open-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div className="nav__panel">
            <div className="nav__top nav__top--panel">
              <h1 className="nav__logo">NewsExplorer</h1>
              <button
                type="button"
                className="nav__mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img src={closebtn} alt="close menu" />
              </button>
            </div>

            <div className="mobile-menu">
              <NavLink className="mobile-menu__home-link" to="/">
                Home
              </NavLink>
              <button
                type="button"
                className="mobile-menu__auth-btn"
                onClick={onLoginClick}
              >
                Sign in
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
export default Navigation;

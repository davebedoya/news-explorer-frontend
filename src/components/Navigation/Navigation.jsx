import "./Navigation.css";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import closebtn from "../../assets/mobile/close.svg";
import menubtnNotLoggedIn from "../../assets/mobile/menu-not-logged-in.svg";
import menubtnLoggedIn from "../../assets/mobile/menu-logged-in.svg";
import logOutIcon from "../../assets/header/icon/logout.svg";
function Navigation({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isLoggedIn,
  setIsLoggedIn,
  onLoginClick,
  isModalOpen,
  isHomePage,
  onSignOut,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();

  return (
    <nav className={`nav ${!isHomePage ? "nav--saved-news" : ""}`}>
      {!isMobile ? (
        <>
          <h1
            className={`nav__logo ${!isHomePage ? "nav__logo--saved-news" : ""}`}
          >
            NewsExplorer
          </h1>
          <div className="nav__links">
            <NavLink
              to="/"
              className={`nav__link ${!isHomePage ? "nav__link--saved-news" : ""}`}
            >
              Home
            </NavLink>
            {isLoggedIn && (
              <NavLink
                to="/saved-news"
                className={`nav__link ${!isHomePage ? "nav__link--saved-news" : ""}`}
              >
                Saved articles
              </NavLink>
            )}
            {!isLoggedIn && (
              <button
                className={`header__auth-btn ${!isHomePage ? "header__auth-btn--saved-news" : ""}`}
                onClick={onLoginClick}
              >
                Sign In
              </button>
            )}
            {isLoggedIn && (
              <button
                // className="header__auth-btn header__auth-btn-signed-in"
                className={`header__auth-btn header__auth-btn-signed-in ${!isHomePage ? "header__auth-btn-signed-in--saved-news" : ""}`}
                onClick={() => {
                  onSignOut();
                  navigate("/");
                }}
              >
                Name{" "}
                <img
                  // className="header__auth-btn-signed-in-icon"
                  className={`header__auth-btn-signed-in-icon ${!isHomePage ? "header__auth-btn-signed-in-icon--saved-news" : ""}`}
                  src={logOutIcon}
                />
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="nav__top">
          {/* <h1 className="nav__logo">NewsExplorer</h1> */}
          <h1
            className={`nav__logo ${!isHomePage ? "nav__logo--saved-news" : ""}`}
          >
            NewsExplorer
          </h1>
          {!isModalOpen && (
            <button
              type="button"
              className="nav__mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <img
                // src={isMobileMenuOpen ? closebtn : menubtnNotLoggedIn}
                src={
                  isMobileMenuOpen
                    ? closebtn
                    : !isHomePage
                      ? menubtnLoggedIn
                      : menubtnNotLoggedIn
                }
                alt={isMobileMenuOpen ? "close menu" : "menu"}
              />
            </button>
          )}
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
                onClick={() => {
                  onLoginClick();
                  setIsMobileMenuOpen(false);
                }}
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

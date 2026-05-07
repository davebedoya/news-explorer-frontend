import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Header({
  setIsLoggedIn,
  isLoggedIn,
  onLoginClick,
  onSearch,
  isModalOpen,
}) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`header ${isHomePage ? "header--home" : "header--saved-news"} ${isMobileMenuOpen ? "header--menu-open" : ""}`}
    >
      <div className="header__overlay"></div>
      <div className="header__content">
        <Navigation
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          onLoginClick={onLoginClick}
          isModalOpen={isModalOpen}
          isHomePage={isHomePage}
        />
        {isHomePage && <SearchForm onSearch={onSearch} />}
        {!isHomePage && (
          <div className="header__saved-news">
            {" "}
            <p className="header__saved-news-label">Saved articles</p>
            <h1 className="header__saved-news-title">
              Elise, you have 5 saved articles
            </h1>
            <p className="header__saved-news-keywords">
              by keywords:{""}
              <span className="header__saved-news-keywords-span">
                Nature, Yellowstone, and 2 other
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

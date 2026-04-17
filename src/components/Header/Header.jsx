import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import { useState } from "react";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`header ${isMobileMenuOpen ? "header--menu-open" : ""}`}>
      <div className="header__overlay"></div>
      <div className="header__content">
        <Navigation
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <SearchForm />
      </div>
    </div>
  );
}

export default Header;

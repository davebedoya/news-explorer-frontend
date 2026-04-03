import "./Header.css";
import Navigation from "../Navigation/Navigation";
// import SearchForm from "../SearchForm/SearchForm";

function Header() {
  return (
    <div className="header">
      <div className="header__overlay"></div>
      <div className="header__content">
        <Navigation />
        {/* <SearchForm /> */}
      </div>
    </div>
  );
}

export default Header;

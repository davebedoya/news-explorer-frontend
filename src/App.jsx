import "normalize.css";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import { getNews } from "./utils/api";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articles, setArticles] = useState([]);
  const [userHasSearched, setHasSearched] = useState(false);

  //   function nothingFound(articles) {
  //     if (!userHasSearched) {
  //       return
  //     } else if (userHasSearched && articles.length === 0){
  //       // show "Nothing Found"
  //     } else(userHasSearched && articles.length > 0){
  // return showMain;
  //     }
  //   }

  const closeModal = () => {
    setActiveModal("");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  // useEffect(() => {
  //   getNews("nature")
  //     .then((data) => {
  //       console.log(data.articles);
  //       setArticles(data.articles);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  const handleSearch = (searchInput) => {
    getNews(searchInput)
      .then((data) => {
        setArticles(data.articles);
        setHasSearched(true);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="app">
      <div className="page__content">
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          onLoginClick={handleLoginClick}
          onSearch={handleSearch}
          isModalOpen={activeModal !== ""}
        />
        {!userHasSearched && null}
        {userHasSearched && articles.length === 0 && (
          <div className="main">
            <h1 className="main__heading">Nothing found</h1>
            <p>Sorry, but nothing matched your search terms.</p>
          </div>
        )}
        {userHasSearched && articles.length > 0 && <Main articles={articles} />}{" "}
        <About />
        <Footer />
      </div>
      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeModal}
        // onLogin={handleLogin}
        onSignupClick={handleRegisterClick}
      />
      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeModal}
        // onLogin={handleLogin}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
}
export default App;

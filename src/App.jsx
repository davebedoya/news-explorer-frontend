import "normalize.css";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import { getNews } from "./utils/api";
import Preloader from "./components/Preloader/Preloader";
import { Routes, Route } from "react-router-dom";
import SavedNews from "./components/SavedNews/SavedNews";
import SuccessModal from "./components/SuccessModal/SuccessModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("jwt", "fake-jwt");
    closeModal();
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleRegisterSuccess = () => {
    setActiveModal("success");
  };
  const handleSearch = (searchInput) => {
    setArticles(null);
    setIsLoading(true);
    getNews(searchInput)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
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
          onSignOut={handleSignOut}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {isLoading && <Preloader />}
                {articles && articles.length === 0 && (
                  <div className="main">
                    <h1 className="main__heading">Nothing found</h1>
                    <p>Sorry, but nothing matched your search terms.</p>
                  </div>
                )}
                {articles && articles.length > 0 && (
                  <Main articles={articles} />
                )}
                <About />
              </div>
            }
          ></Route>
          <Route path="saved-news" element={<SavedNews />}></Route>
        </Routes>
        <Footer />
      </div>
      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeModal}
        onLogin={handleLogin}
        onSignupClick={handleRegisterClick}
      />
      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeModal}
        onLoginClick={handleLoginClick}
        onRegisterSuccess={handleRegisterSuccess}
      />
      <SuccessModal
        isOpen={activeModal === "success"}
        onClose={closeModal}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
}
export default App;

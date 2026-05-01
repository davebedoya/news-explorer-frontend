import "normalize.css";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const closeModal = () => {
    setActiveModal("");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  return (
    <div className="app">
      <div className="page__content">
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          onLoginClick={handleLoginClick}
        />
        <Main />
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

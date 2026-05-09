import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function LoginModal({ isOpen, onClose, onLogin, onSignupClick }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const resetForm = () => {
    setValues({
      email: "",
      password: "",
    });
  };
  function handleFormClose() {
    resetForm();

    onClose();
  }

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setValues({
      ...values,
      [inputName]: inputValue,
    });
  };

  const handleSubmit = () => {
    onLogin();
    resetForm();
  };

  const isFormValid = values.email && values.password;

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      secondaryText="Sign up"
      onSecondaryClick={onSignupClick}
      onClose={handleFormClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Enter email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="Enter password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
          minLength={6}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;

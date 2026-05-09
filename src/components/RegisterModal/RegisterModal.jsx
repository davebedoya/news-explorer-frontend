import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function RegisterModal({ isOpen, onClose, onLoginClick, onRegisterSuccess }) {
  const resetForm = () => {
    setValues({
      email: "",
      password: "",
      username: "",
    });
  };

  function handleFormClose() {
    resetForm();
    onClose();
  }

  function handleSubmit() {
    onClose();
    onRegisterSuccess();
  }

  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setValues({
      ...values,
      [inputName]: inputValue,
    });
  };

  const isFormValid = values.email && values.password && values.username;

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      secondaryText="Sign in"
      onSecondaryClick={onLoginClick}
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
        />
      </label>
      <label htmlFor="username" className="modal__label">
        Username
        <input
          type="text"
          className="modal__input"
          id="username"
          placeholder="Enter your username"
          name="username"
          value={values.username}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;

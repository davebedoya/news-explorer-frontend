import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onLoginClick }) {
  function handleFormClose() {
    onClose();
    // resetForm();
  }
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      secondaryText="Sign in"
      onSecondaryClick={onLoginClick}
      onClose={handleFormClose}
      isOpen={isOpen}
      //   onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Enter email"
          name="email"
          //   value={values.email}
          //   onChange={handleChange}
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
          //   value={values.password}
          //   onChange={handleChange}
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
          //   value={values.username}
          //   onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;

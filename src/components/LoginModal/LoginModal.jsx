import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onLogin, onSignupClick }) {
  function handleFormClose() {
    onClose();
    // resetForm();
  }
  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      secondaryText="Sign up"
      onSecondaryClick={onSignupClick}
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
    </ModalWithForm>
  );
}

export default LoginModal;

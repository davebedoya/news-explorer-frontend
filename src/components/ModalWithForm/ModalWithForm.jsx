import "./ModalWithForm.css";
import closeIcon from "../../assets/close-icon.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  secondaryText,
  onSecondaryClick,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
          {secondaryText && (
            <p className="modal__switch-text">
              or{" "}
              <button
                type="button"
                className="modal__switch-button"
                onClick={onSecondaryClick}
              >
                {secondaryText}
              </button>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

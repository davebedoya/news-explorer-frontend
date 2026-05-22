import "./ModalWithForm.css";
import closeIcon from "../../assets/close-icon.svg";
import { useEffect } from "react";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  secondaryText,
  onSecondaryClick,
  isFormValid,
  showOrText = true,
  contentModifier = "",
  titleModifier = "",
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className={`modal__content ${contentModifier}`}>
        <h2 className={`modal__title ${titleModifier}`}>{title}</h2>

        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>
        <form className="modal__form" onSubmit={handleSubmit}>
          {children}
          {buttonText && (
            <button
              type="submit"
              className="modal__submit"
              disabled={!isFormValid}
            >
              {buttonText}
            </button>
          )}
          {secondaryText && (
            <p
              className={`modal__switch-text ${!showOrText ? "modal__switch-text--success" : ""}`}
            >
              {showOrText && "or "}
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

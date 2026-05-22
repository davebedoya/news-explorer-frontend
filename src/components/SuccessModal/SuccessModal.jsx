import "./SuccessModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SuccessModal({ isOpen, onClose, onLoginClick }) {
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      secondaryText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSecondaryClick={onLoginClick}
      showOrText={false}
      contentModifier="modal__content--success"
      titleModifier="modal__title--success"
    >
      <div className="success_modal"></div>
    </ModalWithForm>
  );
}

export default SuccessModal;

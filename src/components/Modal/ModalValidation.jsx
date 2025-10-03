import { useState } from "react";
import "./ModalValidation.css"

function ModalValidation() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop"></div>
      <dialog open aria-modal="true" aria-labelledby="modal-title" className="modal-validation">
        <h2 id="modal-title">¡Formulario enviado!</h2>
        <p>Tu mensaje ha sido recibido correctamente.</p>
        <button 
          className="close-button" 
          onClick={handleClose}
          aria-label="Cerrar mensaje de confirmación"
        >
          Cerrar
        </button>
      </dialog>
    </>
  );
}

export default ModalValidation
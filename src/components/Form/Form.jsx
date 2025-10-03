import { useState } from "react";
import ModalValidation from "../Modal/ModalValidation";
import "./Form.css";

function Form() {
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit} aria-labelledby="form-title" className="contact-form">
        <fieldset className="form-fieldset">
          <legend id="form-title" className="form-legend">Formulario de contacto</legend>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              autoComplete="name" 
              required 
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              autoComplete="email" 
              required 
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="form-submit">Enviar</button>
        </fieldset>
      </form>
      {showModal && <ModalValidation />}
    </>
  );
}

export default Form
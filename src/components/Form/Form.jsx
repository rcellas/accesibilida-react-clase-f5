import { useState } from "react";
import ModalValidation from "../Modal/ModalValidation";
import './Form.css'

function Form() {
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit} aria-labelledby="form-title">
        <fieldset>
          <legend id="form-title">Formulario de contacto</legend>
          <div>
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div>
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </fieldset>
      </form>
      {showModal && <ModalValidation />}
    </>
  );
}

export default Form
import React from "react";
import "../styles/exercicio_6_contactForm.css";

const Exercicio6ContactForm = () => {
  return (
    <div className="form-container">
      <h2>Entre em Contato</h2>
      <form className="form">
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensagem" rows={4} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Exercicio6ContactForm;

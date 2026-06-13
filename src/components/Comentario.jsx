import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Comentario.css";
const Comentario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nqec9en",
        "template_wm3sa1l",
        form.current,
        "krlD8iAtZoXvecYmx",
      )
      .then((result) => {
        alert("Mensagem enviada!");
        e.target.reset();
      })
      .catch((error) => {
        alert("Erro ao enviar mensagem, tente novamente!");
      });
  };

  return (
    <div className="comentario-container">
      <h2>Deixe seu comentário :)</h2>
      <div className="formulario">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nome" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Mensagem" required />

          <button className="btn-comentario" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comentario;

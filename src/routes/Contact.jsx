import "./Contact.css";
import { useState } from "react";

import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {
  const [copiarEmail, setCopiarEmail] =useState(false)
  const [copiarNumero, setCopiarNumero] =useState(false)
  const email = "antunesjoao@gmail.com"
  const numero = "+55 (92) 985094020"
  const insta =  "jantuness98" 

  const handleEmail = async() =>{
    try{
      await navigator.clipboard.writeText(email)
      setCopiarEmail(true)
      setTimeout(() =>setCopiarEmail(false), 1000)
    }catch(err){
      console.error("Error ao copiar", err)
    }
  }
  const handleNumero = async() =>{
    try{
      await navigator.clipboard.writeText(numero)
      setCopiarNumero(true)
      setTimeout(() =>setCopiarNumero(false), 1000)
    }catch(err){
      console.error("Error ao copiar", err)
    }
  }

  return (
    <div className="contact-control">
      <div className="container">
        <MdEmail className="cont" />
        <p>{email}</p>
        <button onClick={handleEmail} className="btn">{copiarEmail ? "Copiado!" : "Copiar"}</button>
      </div>
      <div className="container">
        <FaWhatsapp className="cont" />
        <p>{numero}</p>
        <button onClick={handleNumero} className="btn">{copiarNumero ? "Copiado!" : "Copiar"}</button>
      </div>
      <div className="container">
        <FaSquareInstagram className="cont" />
        <p>{insta}</p>
        <button type="submit" className="btn">Copy</button>
      </div>
    </div>
  );
};

export default Contact;

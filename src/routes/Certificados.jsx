import React from "react";
import "./Certificados.css";

//FOTOS
import ampulheta from "../img/ampulheta.webp";
import js from "../img/js.jpg";
import web from "../img/web.jpg";
import embarcados from "../img/embarcados.jpg";
import ocean from "../img/ocean.jpg";

const Certificados = () => {
  return (
    <div className="certificados-container">
      <div className="bacharelado-container">
        <div className="title">
          <h2>Bacharelado</h2>
        </div>
        <div className="certificado-container">
          <div className="certificado">
            <img src={ampulheta} alt="ampulheta" className="certificados-img" />
            <p>Certificado de Bacharelado em Sistema de Informação</p>
            <p>Previsão de conclusão: julho/2026</p>
            <p>
              <span>Em andamento...</span>
            </p>
          </div>
        </div>
      </div>
      <div className="cursos-container">
        <div className="title">
          <h2>Cursos</h2>
        </div>
        <div className="certificado-container">
          <div className="certificado">
            <img src={web} alt="web" className="certificados-img" />
            <p>Curso de React.js/TypeScript Javascript Node.js e MongoDB</p>
            <p>Duração: 51 horas</p>
            <p>
              <span>Finalizado!</span>
            </p>
          </div>
          <div className="certificado">
            <img src={js} alt="" className="certificados-img" />
            <p>Javascript Completo: Do Básico ao Avançado</p>
            <p>Duração: 24 horas</p>
            <p>
              <span>Finalizado!</span>
            </p>
          </div>
        </div>
      </div>
      <div className="palestras-container">
        <div className="title">
          <h2>Palestras</h2>
        </div>
        <div className="certificado-container">
          <div className="certificado">
            <img src={embarcados} alt="" className="certificados-img" />
            <p>Sidia</p>
            <p>Palestra sobre embarcados</p>
            <p>Duração: 3 horas</p>
          </div>
          <div className="certificado">
            <img src={ocean} alt="" className="certificados-img" />
            <p>Ocean</p>
            <p>Palestra sobre os fundamentos do React</p>
            <p>Duração: 3 horas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificados;

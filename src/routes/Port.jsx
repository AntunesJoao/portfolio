import "./Port.css";

import QRPage from "../img/QRPage.png";
import BlogHome from "../img/BlogHome.png";
import Calculadorahome from "../img/Calculadorahome.png";
import GLPI from "../img/GLPI.png";
import Cobrinha from "../img/Cobrinha.png";
import Hdhost from '../img/Hdhost.png'

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Port = () => {
  return (
    <div className="port-control">
      <div className="port-colum">
        <div className="card-control">
          <h2>Gerador de QRcode</h2>
          <img src={QRPage} alt="Foto do projeto" />
          <button className="btn">Ler mais</button>
        </div>
        <div className="card-control">
          <h2>Blog com Axios</h2>
          <img src={BlogHome} alt="Foto do projeto" />
          <button className="btn">Ler mais</button>
        </div>
        <div className="card-control">
          <h2>Calculadora de IMC</h2>
          <img src={Calculadorahome} alt="Foto do projeto" />
          <button className="btn">Ler mais</button>
        </div>
      </div>

      <div className="port-colum">
        <div className="card-control">
          <h2>Chamados online</h2>
          <img src={GLPI} alt="Foto do projeto" />
          <button className="btn">Ler mais</button>
        </div>
        <div className="card-control">
          <h2>Jogo da cobrinha</h2>
          <img src={Cobrinha} alt="Foto do projeto" />
          <button className="btn">Ler mais</button>
        </div>
        <div className="card-control">
          <h2>HdHost</h2>
          <img src={Hdhost} alt="Foto do projeto" />
          <button className="btn">Ler mais</button>
        </div>
      </div>
    </div>
  );
};

export default Port;

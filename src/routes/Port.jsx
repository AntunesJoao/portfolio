import "./Port.css";
import { useState } from "react";




import QRHome from "../img/QRHome.png";
import BlogHome from "../img/BlogHome.png";
import Calculadorahome from "../img/Calculadorahome.png";
import GLPI from "../img/GLPI.png";
import Cobrinha from "../img/Cobrinha.png";
import Hdhost from "../img/Hdhost.png";


import QRcode from "../components/QRcode";

const Port = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="port-control">
      <div className="port-colum">
        <div className="card-control">
          <h2>Gerador de QRcode</h2>
          <img src={QRHome} alt="Foto do projeto" />
          <button className="btn" onClick={() => setShow(!show)}>
            Ver descriçao
          </button>

          {show && <QRcode setShow ={setShow}/>}
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

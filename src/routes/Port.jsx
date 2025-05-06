import "./Port.css";
import { useState } from "react";

//fotos
import QRHome from "../img/QRHome.png";
import BlogHome from "../img/BlogHome.png";
import Calculadorahome from "../img/Calculadorahome.png";
import GLPI from "../img/GLPI.png";
import Cobrinha_foto from "../img/Cobrinha_foto.png";
import HdhostHome from "../img/HdhostHome.png";

import fotomongo from "../img/fotomongo.png"

//componentes
import QRcode from "../components/QRcode";
import Blog from "../components/Blog"
import Calculadora from "../components/Calculadora";
import Chamados from "../components/Chamados";
import Cobrinha from "../components/Cobrinha"
import Hdhost from "../components/Hdhost";
import Mongo from "../components/Mongo"


const Port = () => {
  const [show, setShow] = useState({
    qrcode: false,
    blog: false,
    calculadora: false,
    chamados: false,
    cobrinha: false,
    Hdhost: false,
    mongo: false,
  });

  return (
    <div className="port-control">
      <div className="port-colum">

        <div className="card-control">
          <h2>Projeto fullstack com MongoDB Atlas</h2>
          <img src={fotomongo} alt="Foto do projeto" />
          <button className="btn-port" onClick={() => setShow(prev =>({...prev, mongo: !prev.mongo}))}>
            <p>Ver mais</p>
          </button>
          {show.mongo && <Mongo setShow ={setShow}/>}
        </div>

        <div className="card-control">
          <h2>Gerador de QRcode</h2>
          <img src={QRHome} alt="Foto do projeto" />
          <button className="btn-port" onClick={() => setShow(prev =>({...prev, qrcode: !prev.qrcode}))}>
            <p>Ver mais</p>
          </button>
          {show.qrcode && <QRcode setShow ={setShow}/>}
        </div>

        <div className="card-control">
          <h2>Blog com Axios</h2>
          <img src={BlogHome} alt="Foto do projeto" />
          <button className="btn-port" onClick={()=> setShow(prev =>({...prev, blog: !prev.blog}))}><p>Ver mais</p></button>
          {show.blog && <Blog setShow = {setShow}/>}
        </div>

        <div className="card-control">
          <h2>Calculadora de IMC</h2>
          <img src={Calculadorahome} alt="Foto do projeto" />
          <button className="btn-port" onClick={() => setShow(prev =>({...prev, calculadora: !prev.calculadora}))}><p>Ver mais</p></button>
          {show.calculadora && <Calculadora setShow ={setShow}/>}
        </div>
      </div>

      <div className="port-colum">
        <div className="card-control">
          <h2>Chamados online</h2>
          <img src={GLPI} alt="Foto do projeto" />
          <button className="btn-port" onClick={() => setShow(prev =>({...prev, chamados: !prev.chamados}))}><p>Ver mais</p></button>
          {show.chamados && <Chamados setShow={setShow}/>}
        </div>

        <div className="card-control">
          <h2>Jogo da cobrinha</h2>
          <img src={Cobrinha_foto} alt="Foto do projeto" />
          <button className="btn-port" onClick={() => setShow(prev =>({...prev, cobrinha: !prev.cobrinha}))}><p>Ver mais</p></button>
          {show.cobrinha && <Cobrinha setShow={setShow}/>}
        </div>

        <div className="card-control">
          <h2>HdHost</h2>
          <img src={HdhostHome} alt="Foto do projeto" />
          <button className="btn-port"onClick={() => setShow(prev =>({...prev, Hdhost: !prev.Hdhost}))}><p>Ver mais</p></button>
          {show.Hdhost && <Hdhost setShow={setShow}/>}
        </div>
      </div>
    </div>
  );
};

export default Port;

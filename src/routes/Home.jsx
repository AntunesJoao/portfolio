import React from "react";
import MinhaFoto from "../img/foto.png";
import "./Home.css";

//icones
import { HiOutlineDocumentDownload } from "react-icons/hi";

const Home = () => {
  return (
    <div className="main">
      <div className="info">
        <p>Olá, eu sou</p>
        <h1 className="typewriter">João Antunes</h1>
        <p>
          Desenvolvedor de software | Automação industrial | <br></br>
          Visão computacional | Inteligência artificial
        </p>
      </div>
      <div className="img-control">
        <img src={MinhaFoto} alt="Minha foto" />
      </div>
    </div>
  );
};

export default Home;

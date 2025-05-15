import React from "react";
import MinhaFoto from "../img/foto.png";
import "./Home.css";

//icones
import { HiOutlineDocumentDownload } from "react-icons/hi";

const Home = () => {

  const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Antunes.pdf';
  link.download = 'Antunes.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div className="main">
      <div className="info">
        <p>Óla, eu sou</p>
        <h1 className="typewriter">João Antunes</h1>
        <p>Desenvolvedor de software apaixonador
          por criar sites <br></br> e experiências interativas na web </p>
        
            <button className="btn" onClick={handleDownload}>Baixar Curriculo <HiOutlineDocumentDownload /></button>
         
      </div>
      <div className="img-control">
        <img src={MinhaFoto} alt="Minha foto" />
      </div>
    </div>
  );
};

export default Home;

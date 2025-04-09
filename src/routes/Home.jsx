import React from "react";
import MinhaFoto from "../img/MinhaFoto.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <div className="main">
      <div className="info">
        <p>Óla, eu sou</p>
        <h1>João Antunes</h1>
        <p>Desenvolvedor de software apaixonador
          por criar sites <br></br> e experiências interativas na web </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Angular</li>
        </ul>
      </div>
      <div className="img-control">
        <img src={MinhaFoto} alt="Minha foto" />
      </div>
    </div>
  );
};

export default Home;

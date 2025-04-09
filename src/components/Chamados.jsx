import { BsXLg } from "react-icons/bs";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import GLPI from '../img/GLPI.png'

const Chamados = ({setShow}) => {
  return (
      <div className="fundo">
              <div className="card-fundo">
                <div className="nav-btn">
                  <button onClick={() => setShow(false)} className="btn-card">
                    <BsXLg />
                  </button>
                </div>
                <div className="fundo-card-control">
                  <img src={GLPI} alt="foto card" />
                  <div className="descrica">
                    <h3>Tecnologias utilizadas:</h3>
                    <ul>
                      <li>React</li>
                      <li>API</li>
                      <li>Servidor local</li>
                    </ul>
                    <p>
                    O intuito do projet é criar a propia API com o servidor 
                    e assim conectar os dois, passando os dados do input
                    para a API. Nesse projeto aprendi a configurar ambos.
                    </p>
                  </div>
                  <div className="code">
                    <SyntaxHighlighter language="javascript" style={dracula}>
                      {`const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/usuarios", (req, res) => {
  const { nome } = req.body;
  const sql = "INSERT INTO usuarios (nome) VALUES (?)";
  db.query(sql, [nome], (err, result) => {
    if (err) {
      res.status(500).send("Erro ao inserir usuário");
    } else {
      res.status(201).send("Usuário inserido com sucesso");
    }
  });
});
app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Chamados
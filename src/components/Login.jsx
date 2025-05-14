import { BsXLg } from "react-icons/bs";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, holiTheme } from "react-syntax-highlighter/dist/esm/styles/prism";

import banco from "../img/banco.png"

const Hdhost = ({ setShow }) => {
    return (
        <div className="fundo">
            <div className="card-fundo">
                <div className="nav-btn">
                    <button onClick={() => setShow(false)} className="btn-card">
                        <BsXLg />
                    </button>
                </div>
                <div className="fundo-card-control">
                    <img src={banco} alt="foto card" />
                    <div className="descrica">
                        <h3>Tecnologias utilizadas:</h3>
                        <ul>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Axios</li>
                            <li>Mongo DB Atlas</li>
                            <li>Mongoose</li>
                        </ul>
                        <p>
                            Um projeto fullstack onde o usuário faz um cadastro e é enviado para o banco de dados.
                            Na tela de login, caso o user já tenha um cadastro com os campos preenchidos corretamente,
                            é feito uma requisição para o banco para verificar se consta no banco de dados o cadastro.
                            Utilizei uma biblioteca do js para criptografar a senha do usuário. 
                        </p>
                    </div>
                    <div className="code">
                        <SyntaxHighlighter language="javascript" style={dracula}>
                            {` const autenticarLogin = async(req, res) =>{
    try {
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json ({msg: "Por favor, preencher todos os campos"})
        }
        //procurar usuário por email
        const user = await cadastre.findOne({email}
        if(!user){
            return res.status(404).json({msg: "Usuário não encontrado"})
        }
            console.log("Senha armazenada:", user.password);
        // Comparar a senha informada com a senha criptografada no banco
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {  
            return res.status(401).json({ msg: "Senha incorreta." });
        }

        res.json({ msg: "Login bem-sucedido." });
    `}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hdhost
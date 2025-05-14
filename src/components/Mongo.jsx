import { BsXLg } from "react-icons/bs";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, holiTheme } from "react-syntax-highlighter/dist/esm/styles/prism";

import form from "../img/form.png"

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
                    <img src={form} alt="foto card" />
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
                            Um projeto fullstack onde o usuario manda um chamado pelo form que faz a
                            requisição pro banco MongoDB, e essa requisição é visualizada na aba "visaualização".
                            foi utilizado o MongoDB Atlas para hospedar na nuvem, axios para fazer as req e res,
                            mongosse para configurar o banco e o Node.js para ser o servidor local.
                        </p>
                    </div>
                    <div className="code">
                        <SyntaxHighlighter language="javascript" style={dracula}>
                            {`  < const newMemory = new Memory({
         comments: [
           {
             name,
             store,
             number,
             src,},],});
     //Enviando para o banco de dados Mongoose Atlas
     await newMemory.save()
     res.json({msg: "Criado com sucesso", newMemory})
    } catch (error) {
     console.log(error.message)
     res.status(500).send("Ocorreu um eroo!")
    }
 }
    `}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hdhost
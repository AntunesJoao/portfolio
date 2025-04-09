import { BsXLg } from "react-icons/bs";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, holiTheme } from "react-syntax-highlighter/dist/esm/styles/prism";

import HdhostMore from '../img/HdhostMore.png'

const Hdhost = ({setShow}) => {
  return (
     <div className="fundo">
                     <div className="card-fundo">
                       <div className="nav-btn">
                         <button onClick={() => setShow(false)} className="btn-card">
                           <BsXLg />
                         </button>
                       </div>
                       <div className="fundo-card-control">
                         <img src={HdhostMore} alt="foto card" />
                         <div className="descrica">
                           <h3>Tecnologias utilizadas:</h3>
                           <ul>
                             <li>HTML</li>
                             <li>CSS</li>
                           </ul>
                           <p>
                          Uma página simples com HTML e CSS básico apenas para praticar
                          o que foi aprendido.
                           </p>
                         </div>
                         <div className="code">
                           <SyntaxHighlighter language="javascript" style={dracula}>
                             {`  <section class="searchdomain-container">
                <h2>Qual domínio você quer para o seu site?</h2>
                <p>Verifique se o domínio esstá disponível</p>
                <form>
                    <input type="text" 
                    name="domain" id="domain" 
                    placeholder="Digite seu domínio desejado">
                    <input type="submit" value="Procurar domínio"> 
                </form>
            </section>
    `}
                           </SyntaxHighlighter>
                         </div>
                       </div>
                     </div>
                   </div>
  )
}

export default Hdhost
import calculado from '../img/calculado.png'

import { BsXLg } from "react-icons/bs";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";


const Calculadora = ({setShow}) => {
  return (
     <div className="fundo">
          <div className="card-fundo">
            <div className="nav-btn">
              <button onClick={() => setShow(false)} className="btn-card">
                <BsXLg />
              </button>
            </div>
            <div className="fundo-card-control">
              <img src={calculado} alt="foto card" />
              <div className="descrica">
                <h3>Tecnologias utilizadas:</h3>
                <ul>
                  <li>React</li>
                </ul>
                <p>
                  O intuito do projeto era praticar a lógica de programação com
                  javascript e a troca de componentes passando os dados de um
                  componente para o outro.
                </p>
              </div>
              <div className="code">
                <SyntaxHighlighter language="javascript" style={dracula}>
                  {`function App() {
  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")
  const calcImc = (e,height, weight) =>{
    e.preventDefault()
    if(!weight || !height)return
    const weightFloat = +weight.replace(",", ".")
    const heightFloat = +weight.replace(",", ".")
    const imcResult = (weightFloat/ (heightFloat * heightFloat)).toFixed(1)
    setImc(imcResult)
  }
  return (
    <>
      <div className="container">  
        {!imc ? (<ImcCalc calcImc={calcImc}/>):
         <ImcInfo data={data} imc={imc}
          infoClass={infoClass}/>}
      </div>
    </>
  );
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Calculadora
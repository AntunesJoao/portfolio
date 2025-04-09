import "./QRcode.css";
import { BsXLg } from "react-icons/bs";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import QRPage from "../img/QRPage.png";
function QRcode({ setShow }) {
  return (
    <div className="fundo">
      <div className="card-fundo">
        <div className="nav-btn">
          <button onClick={() => setShow(false)} className="btn-card">
            <BsXLg />
          </button>
        </div>
        <div className="fundo-card-control">
          <img src={QRPage} alt="foto card" />
          <div className="descrica">
            <h3>Tecnologias utilizadas:</h3>
            <ul>
              <li>HTML</li>
              <li>Css</li>
              <li>JavaScript</li>
              <li>API</li>
            </ul>
            <p>
              Basta escrever algo e o codigo irá gerar um QRcode vinculado ao
              que foi escrito. Assim que apontar a camera, levará direto a ele.
              Foi utilizado uma API para o QRcode.
            </p>
          </div>
          <div className="code">
            <SyntaxHighlighter language="javascript" style={dracula}>
              {`function generateQrCode(){
                  const qrCodeInputValue = qrCodeInput.value

                  if(!qrCodeInputValue)return
                  qrCodebtn.innerText = "Gerando codigo..."
    
                  qrCodeImg.src =  
" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrCodeInputValue

                  qrCodeImg.addEventListener("load", ()=>{  
                  container.classList.add("active")
                  qrCodebtn.innerText = "Cdigo criado."
    })
}`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRcode;

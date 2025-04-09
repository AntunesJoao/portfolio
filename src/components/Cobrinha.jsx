import { BsXLg } from "react-icons/bs";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import Cobrinha_foto from '../img/Cobrinha_foto.png'

const Cobrinha = ({setShow}) => {
  return (
    <div className="fundo">
                 <div className="card-fundo">
                   <div className="nav-btn">
                     <button onClick={() => setShow(false)} className="btn-card">
                       <BsXLg />
                     </button>
                   </div>
                   <div className="fundo-card-control">
                     <img src={Cobrinha_foto} alt="foto card" />
                     <div className="descrica">
                       <h3>Tecnologias utilizadas:</h3>
                       <ul>
                         <li>Python</li>
                         <li>Pygame</li>
                       </ul>
                       <p>
                      Com esse projeto aperfeiçoei minha logica de programação 
                      em python com POO. Foi utilizado a biblioteca pygame para
                      a criação do jogo.
                       </p>
                     </div>
                     <div className="code">
                       <SyntaxHighlighter language="javascript" style={dracula}>
                         {`tela = pygame.display.set_mode((largura, altura))
pygame.display.set_caption('JOGO')
while True:
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            exit() 
                           
    pygame.draw.rect
    (tela, (255,0,0),(200,  300,   40,     50))
                           
    pygame.draw.circle
    (tela, (0,0,225), (300, 260),        40)
                                    
    pygame.draw.line
    (tela,(255, 255, 0), (390,0), (390,600),           5)
    pygame.display.update()
`}
                       </SyntaxHighlighter>
                     </div>
                   </div>
                 </div>
               </div>
  )
}

export default Cobrinha
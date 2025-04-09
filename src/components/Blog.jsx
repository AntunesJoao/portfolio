import { BsXLg } from "react-icons/bs";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import BlogHome from "../img/BlogHome.png";


const Blog = ({setShow}) => {
  return (
     <div className="fundo">
          <div className="card-fundo">
            <div className="nav-btn">
              <button onClick={() => setShow(false)} className="btn-card">
                <BsXLg />
              </button>
            </div>
            <div className="fundo-card-control">
              <img src={BlogHome} alt="foto card" />
              <div className="descrica">
                <h3>Tecnologias utilizadas:</h3>
                <ul>
                  <li>React</li>
                  <li>API</li>
                  <li>Axios</li>
                </ul>
                <p>
                O intuito do projeto é utilizar uma API externa para que seja
                exibido dados especificos ao clicar na notificaçãoi87u7 desejada.
                </p>
              </div>
              <div className="code">
                <SyntaxHighlighter language="javascript" style={dracula}>
                  {`const Post = () => {
    const {id} = useParams()
    const [post,setPost] = useState({})
    const getPost =  async() => {
        try {           
            const response = 
            await axios.get("https://jsonplaceholder.typicode.com/posts/"+ id)
            const data =  response.data           
            setPost(data)
        } catch(error){
            console.log(error)
        }
    }
    useEffect(() =>{
        getPost()
    }, )
  return (
    <div className='post-container'>
        {!post.title ? (<p>Carregando...</p>) : (<div className='post'>
            <h2>{post.title}</h2>
            <p>{post.body}</p> </div>) }
    </div>
  )
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Blog
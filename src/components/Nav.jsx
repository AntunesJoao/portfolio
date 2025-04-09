import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='nav-control'>
        <h3>
        <Link to={"/"}>Antunes</Link>  
        </h3>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/About"}>Sobre mim</Link>
            </li>
            <li>
                <Link to={"/Skill"}>Habilidades</Link>
            </li>
            <li>
                <Link to={"/Port"}>Portifolio</Link>
            </li>
            <li>
                <Link to={"/Contact"}>Contato</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav
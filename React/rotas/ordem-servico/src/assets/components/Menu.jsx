import React from 'react'
import {Link} from 'react-router-dom'
import "./Menu.css"
 
const Menu = () => {
  return (
    <div className='menu'>
        <Link to='/'>Home </Link>
        <Link to='/sobre'> Sobre </Link>
        <Link to='/servicos'> Serviços </Link>
        <Link to='/contato'> Contato</Link>
    </div>
  )
}
 
export default Menu
import React, { Component } from 'react'
import './Navbar.css'
import Menu from '../../../assets/menu.svg'
import Logo from '../../../assets/loogo.jpg'
export class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <img className='logo' src={Logo} alt="" />
        <img src={Menu} alt="" />
      </div>
    )
  }
}

export default Navbar
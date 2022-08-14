import React, { Component } from 'react'
import './Navbar.css'

export class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <div className="left-side">
          leftside
        </div>
        <div className='vr'></div>
        <div className="right-side">
          rightside
        </div>
      </div>
    )
  }
}

export default Navbar
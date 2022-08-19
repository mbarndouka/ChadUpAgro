import React, { Component } from 'react'
import './Home.css'

import Navbar from '../../components/Navbar/Navbar'

export class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Navbar />
        Home page changed ....
      </div>
    )
  }
}

export default Home
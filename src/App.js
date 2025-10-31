
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';



export default class index extends Component {
  render() {
    return (
      <div>
          <Navbar></Navbar>
          <News>  </News>
      </div>
    )
  }
}

import React, {Component} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Parlour from './components/Parlour'
import Cart from './components/Cart'
import Footer from './components/Footer'

class App extends Component{
  render(){
  return(
    <div>
      <Navbar/>
      <Home/>
      <Parlour/>
      <Cart/>     
      <Footer/>
    </div>
  )
}
}
export default App;

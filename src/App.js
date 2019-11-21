import React, { Component } from 'react'
import axios from 'axios'
import AsignarMesa from './components/AsignarMesa'
import Cabecera from './components/Cabecera'

class App extends Component{
  state = {
    data: [],
    ruta: 'asignarMesa',
  }

  render(){

    const { ruta } = this.state
    return (
      <div className="App">
          <Cabecera/>
          {ruta === 'asignarMesa' && <AsignarMesa/>}    
      </div>
    );
  }
  
}

export default App;
import React, { Component } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { AST_DWLoop } from 'terser';


export default class AsignarMesa extends Component{

    constructor() {
        super();
        this.state = {
          cantidadPersonas: 0,
          mesaAsignada: [], 
          numeroMesaAsignada: '',
        };
        //this.publish = this.publish.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target }) {
        this.setState({
        cantidadPersonas: target.value
        });
      }

   

    asignarMesa = () =>{
        axios.get(('http://localhost:8083/sigloxxi/mesa/asignar/').concat(this.state.cantidadPersonas))
        .then(
            response => {
                console.log(response);
                this.setState({ mesaAsignada: response.data})
                if(this.state.mesaAsignada){
                    this.setState({
                        numeroMesaAsignada: this.state.mesaAsignada.numero
                    })
                }else{
                    this.setState({
                        numeroMesaAsignada: 'No hay mesas disponibles, Por favor espere un momento'

                    })
                }
            }
            
        )
    }

    refreshPage(){ 
        window.location.reload(); 
    }



    
    render(){
        console.log(this.state.numeroMesaAsignada);

        return(
            
            <div align="center">
                <h1>Ingrese la Cantidad de personas:</h1>
                <label>Numero de personas:</label>    
                <input  type="number"
                        min="1"
                        max="4"
                        onChange={this.handleChange}  
                />
                <Button
                    color="primary"
                    onClick={this.asignarMesa}
                >
                    Aceptar
                </Button>

            <table>
                <thead>
                    <tr> 
                        <th align="center">Su mesa es la numero: {this.state.numeroMesaAsignada}
                        </th>
                    </tr>
                </thead>
            </table>

                
            </div>
        )
    }
}
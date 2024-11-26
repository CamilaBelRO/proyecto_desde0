import React, { useState } from 'react';
import { View, Text, Button, Picker, Alert } from 'react-native'
import React, { Component } from 'react';
import React, {} from 'react';


export class Form extends Component {
  //consultar si va un return 
    constructor (props) {
      super (props);
      this.state = {value: 'Asignaturas'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Usted ha seleccionado: ' + this.state.value);
      event.preventDefault();
    
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Seleccione la Asignatura que desea ver
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Prog Web Din">Programacion Web Dinamica</option>
              <option value="Tec de Redes">Tecnologia de Redes II</option>
              <option value="Sist Operativos">Sistemas Operativos</option>
              <option value="Aut y Control">Automatizacion y Control</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
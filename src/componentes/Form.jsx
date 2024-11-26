import React from "react";
// import { Panel } from "./Panel";  
// import Button from './Button';
import { View, Text, StyleSheet } from 'react-native';
import './Form.css'


//Muestra el Panel con sus respectivos botones
// const Form = () => {

//   const handleRegisterClick = () => {
//     console.log('Registro');
// };

// const handleLoginClick = () => {
//     console.log('Inicio de sesión');
// };

  function Form () {
  return (
    <View style={styles.panel}>
     <Text style={styles.title}>Complete el Formulario</Text>
      <Panel title="Bienvenido"> 
        <Button onClick={handleRegisterClick}>Registrarse</Button>
        <Button onClick={handleLoginClick}>Iniciar sesión</Button>
      </Panel>
  // </View>
  
    ); }
    export default Form;
  
  
  //lo siguiente, es otra manera:
  //<div className="panel">
 // <h1 className="title">Complete el Formulario</h1>
  //<Panel title="Bienvenido">
    //<Button onClick={handleRegisterClick}>Registrarse</Button>
    //<Button onClick={handleLoginClick}>Iniciar sesión</Button>
  //</Panel>
//</div>


const styles = StyleSheet.create({
  panel: {
    padding: 20,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});




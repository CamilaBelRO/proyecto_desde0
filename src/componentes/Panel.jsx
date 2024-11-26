import React, { useContext } from 'react';
import { ThemeContext } from './path/to/ThemeContext';
import './Panel.css'; 

 function Panel({ title, children }) {
    const theme = useContext(ThemeContext); //hooks, permite que acceda al valor actual del contexto 

    const className = 'panel-' + theme; //Se define una clase para el CSS de Panel

    return (
      <section className={className}>
        <h1>{title}</h1>
        {children}
      </section>
    )
}

export default Panel; 

// Panel obtendra informacion del boton para cambiar de tema cuando se le indique***

//Algunas alternativas a Children son:
//Exponer varios componentes
//Aceptar un array de objetos como prop
//Llamar a una prop de renderizado para adaptar el renderizado 
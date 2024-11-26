import { useContext, useState, createContext, ThemeContext } from 'react';
import React from 'react';
import {Form} from './componentes/Form';
import {Login} from './Login';
// import {MyApp} from './MyApp';
import {Panel} from './componentes/Panel';
import {Button} from './componentes/Button';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp />);

//exportar algo

// const ThemeContext = createContext(null);

// const Form = () => {
//   return <div>Formulario</div>;
// };

// const Login = () => {
//    Usa el contexto dentro del componente Login
//    const theme = useContext(ThemeContext);

//   return (
//     <div>
//       <h2>Login</h2>
//       <p>El tema actual es: {theme}</p>
//     </div>
//   );
// };

const MyApp = () => {
  return (
    <div>
     {/* <ThemeContext.Provider value="dark" /> */}
    {/* Proveemos el contexto con el valor "dark" */}
    
      <Form />
      <Login />/* Login ahora tiene acceso al contexto */

    </div>
  );
};

export default MyApp;

  // Definir los estados para los campos del formulario
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Manejar el cambio en los campos de texto
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Validación simple
    if (!username || !password) {
      setError('Por favor, ingrese ambos campos.');
      return;
    }

    // Aca se puede enviar los datos al servidor para la autenticación
    console.log('Datos del usuario:', { username, password });

    // Reseteamos los campos y error después del envío
    setUsername('');
    setPassword('');
    setError('');
  };

 
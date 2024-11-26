import { useContext } from 'react';
import React, { useState } from 'react';

//export class Login {
//}

export default function Login() {
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

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Validación simple
    if (!username || !password) {
      setError('Por favor, ingresa ambos campos.');
      return;
    }

    // Aca podemos enviar los datos al servidor para la autenticación
    console.log('Datos del usuario:', { username, password });

    // Reseteamos los campos y error después del envío
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div>
      <h1>Login</h1>
      <p>El tema actual es: {theme}</p>
      <form onSubmit={handleSubmit}>
        {/* Campo de Usuario */}
        <div>
          <label htmlFor="username">Username (o Email):</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange= {(e) => setUsername(e.target.value)} //la otra manera sollo era {handleUsernameChange} que dice que es para llamarlo. en este caso lo esta actualizando.
            placeholder="Ingresa tu usuario"
            required
          />
        </div>

        {/* Campo de Contraseña */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>

        {/* Mostrar error si existe */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Botón de enviar */}
        <button type="submit">Login</button>
        {/*<link rel="enviar" href="Home.jsx" />*/}
      </form>
    </div>
  );
}



//averiguar cuando el usuario es nuevo y quiere registrarse por primera vez.

import React, { useState } from 'react';
import '../src/Login.css'; 

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      console.log("Iniciar sesión con:", event.target[0].value, event.target[1].value);
    } else {
      console.log("Registrarse con:", event.target[0].value, event.target[1].value, event.target[2].value);
    }
  };

  return (
    <div className={`container ${isLogin ? '' : 'right-panel-active'}`}>
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmit}>
          <h1>Crear Cuenta</h1>
          <span>Usa tu correo electrónico para registrarte</span>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Registrarse</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmit}>
          <h1>Iniciar Sesión</h1>
          <span>Usa tu correo electrónico para iniciar sesión</span>
          <input type="email" placeholder="Correo" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Bienvenido de nuevo!</h1>
            <p>Para mantenerte conectado, inicia sesión con tus datos personales</p>
            <button className="ghost" onClick={toggleForm}>Iniciar Sesión</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hola, Amigo!</h1>
            <p>Ingresa tus datos personales y comienza tu viaje con nosotros</p>
            <button className="ghost" onClick={toggleForm}>Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
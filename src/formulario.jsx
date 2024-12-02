import React from 'react';
import './formulario.css';
import logo from './logo.png'; // Asegúrate de tener la imagen en la ruta correcta

const FormularioSeguridadEmpresarial = () => {
  return (
    <div className="form-container">
      <header className="header">
        <img src={logo} alt="Logo Grupo ATS" className="logo" />
        <h1>Seguridad Empresarial Grupo ATS</h1>
        <img src={logo} alt="Logo Grupo ATS" className="logo" />
      </header>
      <form action="#">
        <div className="form-group">
          <label htmlFor="nombreElemento">Nombre del elemento:</label>
          <input type="text" id="nombreElemento" placeholder="Ingrese el nombre del elemento" required />
        </div>

        <div className="form-group">
          <label htmlFor="cargo">Cargo:</label>
          <input type="text" id="cargo" placeholder="Ingrese el cargo" required />
        </div>

        <div className="form-group">
          <label htmlFor="horaEntrada">Hora de entrada:</label>
          <input type="time" id="horaEntrada" required />
        </div>

        <div className="form-group">
          <label htmlFor="personaAutorizo">Persona que autorizó:</label>
          <input type="text" id="personaAutorizo" placeholder="Ingrese el nombre de la persona" required />
        </div>

        <div className="form-group">
          <label htmlFor="servicio">Servicio:</label>
          <input type="text" id="servicio" placeholder="Ingrese el servicio" required />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioSeguridadEmpresarial;
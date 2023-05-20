import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ConsultarObjetos from './components/consultarobjetos';
import logo from './components/assets/Foto site inova.jpeg';
import logo1 from './components/assets/Correios.jpeg';
function App() {

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.background = 'white';

    return () => {
      body.style.background = ''; // Reverta para o estilo de fundo padrão ao remover o componente
    };
  }, []);


  return (

    <BrowserRouter>
      <div className="App">
        <img src={logo} alt="Logo" className="logo" style={{ maxWidth: '100%' }} />
        <img src={logo1} alt="Logo1" className="logo1" style={{ maxWidth: '100%' }} />

        <div className="background"></div>
        <div className="button-container">


          <Link to="/consultarobjetos">
            <button className="main-button">Consultar Objetos</button>
          </Link>

        </div>
        <Routes>

          <Route path="/consultarobjetos" element={<ConsultarObjetos />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;










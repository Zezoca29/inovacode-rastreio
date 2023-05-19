import React, { useState } from 'react';
import './styles/consulta.css';

function ConsultaObjetos() {
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [postagens, setPostagens] = useState([]);

  async function buscarPostagens() {
    const url = `https://www.sgpweb.com.br/novo/api/consulta-postagens?chave_integracao=ffa965130d58fa60da40fd1fed0da47e&data_inicial=${dataInicial}&data_final=${dataFinal}`;
    const response = await fetch(url);
    const data = await response.json();
    setPostagens(data.retorno.objetos);
  }

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="data-inicial">Data Inicial:   </label>
        <input
          type="date"
          id="data-inicial"
          value={dataInicial}
          onChange={(e) => setDataInicial(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <label htmlFor="data-final">Data Final:</label>
        <input
          type="date"
          id="data-final"
          value={dataFinal}
          onChange={(e) => setDataFinal(e.target.value)}
          style={{ marginLeft: '10px' , }}
          
        />
        <button className="search-button" onClick={buscarPostagens} style={{ marginLeft: '10px' }}>
          <strong>Buscar Postagens</strong>
        </button>
      </div>
      <div className="postagens-titulo margem-inferior">
  <span style={{ width: '33.33%', display: 'inline-block', fontWeight: 'bold', fontSize: '1.2em', marginRight: '0px', marginLeft: '50px' }}>
    Código de rastreio
  </span>
  <span style={{ width: '33.33%', display: 'inline-block', fontWeight: 'bold', fontSize: '1.2em', marginRight: '10px', marginLeft: '60px' }}>
    Destinatário
  </span>
  <span style={{ width: '33.33%', display: 'inline-block', fontWeight: 'bold', fontSize: '1.2em', marginRight: '10px' , marginLeft: '50px' }}>
    Status
  </span>
</div>

      <ul>
        {postagens.map((postagem) => (
          <li key={postagem.objeto} className="objeto">
            <strong style={{ width: '33.33%', display: 'inline-block', fontWeight: 'bold', fontSize: '1.2em' }}>
              {postagem.objeto}
            </strong>
            <strong style={{ width: '33.33%', display: 'inline-block', fontWeight: 'bold', fontSize: '1.2em' }}>
              {postagem.destinatario}
            </strong>
            <strong style={{ width: '33.33%', display: 'inline-block', fontWeight: 'bold', fontSize: '1.2em' }}>
              {postagem.status}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConsultaObjetos;




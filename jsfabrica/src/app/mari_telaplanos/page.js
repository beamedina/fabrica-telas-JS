import React from 'react';
import Head from 'next/head';
import styles from "./planos.module.css"

const Planos = () => {
  return (
    <div className="container">
     
        <title>Planos</title>
     
      <h1 className="titulo">Escolha seu plano</h1>

      <div className="planos">
        <div className="plano">
          <h2>Plano Mensal.</h2>
          <div className="preco">R$90,00</div>
          <ul>
            <li>Acesso à todos os aparelhos</li>
            <li>Horários - 05:00 às 23:00</li>
          </ul>
        </div>

     
        <div className="plano">
          <h2>Plano Anual.</h2>
          <div className="preco">R$900,00</div>
          <ul>
            <li>Acesso à todos os aparelhos</li>
            <li>Horários - 05:00 às 23:00</li>
          </ul>
        </div>

       
        <div className="plano">
          <h2>Plano Vip.</h2>
          <div className="preco">R$130,00</div>
          <ul>
            <li>Acesso à todos os aparelhos</li>
            <li>Horários - 05:00 às 23:00</li>
            <li>Acesso à zumba</li>
            <li>Acesso à hidroginástica</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Planos;

// pages/index.js
import React from 'react';
import Head from 'next/head';
import Image from "next/image";
import styles from ".aparelho.module.css"

const RegistroAparelhos = () => {
  return (
    <div className="container">
      <Head>
        <title>Registro de Aparelhos</title>
      </Head>
      <h1 className="titulo">Registro de aparelhos</h1>

      <table className="tabela">
        <thead>
          <tr>
            <th>Aparelho</th>
            <th>Peso</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, index) => (
            <tr key={index}>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="botoes">
        <button className="botao">REGISTRAR APARELHO</button>
        <button className="botao">EXCLUIR APARELHOS</button>
      </div>
    </div>
  );
};

export default RegistroAparelhos;


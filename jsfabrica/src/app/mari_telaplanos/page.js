"use client";
import React, { useState, useEffect } from 'react';
import styles from './planos.module.css';
import Header from '@/components/Header';

const Planos = () => {
  const [plano, setPlano] = useState([]);

  useEffect(() => {
    const getClientes = async () => {
      try {
        const response = await fetch('https://ifitnessapi.dev.vilhena.ifro.edu.br/planos');
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }
        const data = await response.json();
        setPlano(data);
        console.log("Dados dos funcionários:", data);
      } catch (error) {
        console.error('Ocorreu um erro ao buscar os dados:', error.message);
      }
    };
    getClientes();
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.mainPlanos}>
        <section className={styles.plansSection}>
          {plano.map((plano, index) => (
            <div key={index}>
              <h2>{plano.nome}</h2>
              <div className={styles.plan}>
                <p>{plano.preco}</p>
                <ul>
                  <li className={styles[`liPlano${plano.nome}`]}>
          {plano.descricao}
        </li>
                 
                </ul>
              </div>
            </div>
          ))}
          
        </section>
      </main>
    </div>
  );
};

//teste maiiiis

export default Planos;

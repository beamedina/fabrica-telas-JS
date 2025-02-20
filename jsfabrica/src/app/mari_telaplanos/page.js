import React from 'react';
import styles from './planos.module.css';
import Header from '@/components/Header';

const Planos = () => {
  return (
    <div>
    <Header/>
    <section className={styles.plansSection}>
      <div>
        <h1 className={styles.h1}>Plano Mensal</h1>
        <div className={styles.plan}>
          <p>R$90,00</p>
          <ul>
            <li>Acesso a todos os aparelhos</li>
            <li className={styles.liPlanoMen}>Horários - 05:00 às 23:00</li>
          </ul>
        </div>
      </div>

      <div>
        <h2>Plano Anual</h2>
        <div className={styles.plan}>
          <p>R$900,00</p>
          <ul>
            <li>Acesso a todos os aparelhos</li>
            <li className={styles.liPlanoAnu}>Horários - 05:00 às 23:00</li>
          </ul>
        </div>
      </div>

      <div>
        <h3>Plano Vip</h3>
        <div className={styles.plan}>
          <p>R$130,00</p>
          <ul>
            <li>Acesso a todos os aparelhos</li>
            <li>Acesso à zumba</li>
            <li>Acesso à hidroginástica</li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Planos;

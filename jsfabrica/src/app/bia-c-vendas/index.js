
import React from "react";
import styles from "./vendas.module.css";
import Image from "next/image";

const Popup = ({ isOpen, setOpenModal  }) => {
  if (!isOpen) return null; 

  return (
    <div className={styles.fundo}>
      <div className={styles.vendas}>
      <Image
         className={styles.fechar}
         src='/Image/botao-x.png'
         alt='Imagem do álbum do Bon Jovi'
         width={20}
         height={20}
         onClick={() => setOpenModal (false)} 
              />
        <div className={styles.div}>
          <h1>Cadastrar Vendas</h1>
          <form action="/login" method="post">
            <label className={styles.label} htmlFor="plano"> Plano </label>
            <input
              type="text"
              placeholder="Digite o plano do usuário"
              className={styles.input}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="valor">  Valor </label>
            <input
              type="text"
              placeholder="Digite o valor do plano"
              className={styles.input}
            />
          </form>
          <button type="submit" className={styles.button}> Registrar </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

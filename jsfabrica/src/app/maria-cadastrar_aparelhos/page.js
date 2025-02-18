import React from "react";
import styles from "./cadastrar_aparelhos.module.css";
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
          <h1>Cadastrar Aparelhos</h1>
          <form action="/login" method="post">
            <label className={styles.label} htmlFor="nome"> Nome </label>
            <input
              type="text"
              placeholder="Digite o nome do aparelho"
              className={styles.input}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="Peso">  Peso </label>
            <input
              type="text"
              placeholder="Digite o peso"
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

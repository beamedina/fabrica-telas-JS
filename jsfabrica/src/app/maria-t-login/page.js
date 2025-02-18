import React from "react";
import styles from "./login.module.css";
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
          <h1>Login</h1>
          <form action="/login" method="post">
            <label className={styles.label} htmlFor="User"> User </label>
            <input
              type="text"
              placeholder="Digite o usuário"
              className={styles.input}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="Senha">  Senha </label>
            <input
              type="text"
              placeholder="Digite sua senha"
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

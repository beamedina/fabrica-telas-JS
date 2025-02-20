
import React from "react";
import styles from "./excluir.module.css";
import Image from "next/image";

const ExcluirFunci = ({ isOpen, setOpenModal  }) => {
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
          <h1>Excluir Cadastro</h1>
          <form action="/login" method="post">
            <label className={styles.label} htmlFor="plano"> ID do item a ser excluido  </label>
            <input
              type="text"
              placeholder="Digite o ID"
              className={styles.input}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="valor">  Senha do Adm </label>
            <input
              type="text"
              placeholder="Digite a senha"
              className={styles.input}
            />
          </form>
          <button type="submit" className={styles.button}> Registrar </button>
        </div>
      </div>
    </div>
  );
};

export default ExcluirFunci;

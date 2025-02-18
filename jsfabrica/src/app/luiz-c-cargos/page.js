
import React from "react";
import styles from "./c-cargos.module.css";
import Image from "next/image";

const Cadcargo = ({ isOpen, setOpenModal }) => {
    if (!isOpen) return null;

  return (
    <div className={styles.back}>
      <div className={styles.CadCliente}>
      <Image
         className={styles.fechar}
         src='/Image/botao-x.png'
         alt='Imagem do álbum do Bon Jovi'
         width={20}
         height={20}
         onClick={() => setOpenModal(false)} 
              />
        <div className={styles.div}>
          <h1>Cadastrar Vendas</h1>
          <form action="/login" method="post">
            <label className={styles.label} htmlFor="plano"> Nome </label>
            <input
              type="text"
              placeholder="Digite o nome do usuário"
              className={styles.input}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="cpf">  Descrição </label>
            <input
              type="text"
              placeholder="Digite a Descrição do usuário"
              className={styles.input}
            />
           
            
          </form>
          <button type="submit" className={styles.button}> Registrar </button>
        </div>
      </div>
    </div>
  );
};

export default Cadcargo;

/*luiz*/
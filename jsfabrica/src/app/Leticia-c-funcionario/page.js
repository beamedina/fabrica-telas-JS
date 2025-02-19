
import React from "react";
import styles from "./funcionario.module.css";
import Image from "next/image";

const CadFuncionario = ({ isOpen, setOpenModal }) => {
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
          <h1>Cadastrar Funcionário</h1>
          <form action="/login" method="post">
            <label className={styles.label} htmlFor="plano"> Cargo </label>
            <input
              type="text"
              placeholder="Digite o cargo do funcionário"
              className={styles.input}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="cpf">  CPF </label>
            <input
              type="text"
              placeholder="Digite o CPF do funcionário"
              className={styles.input}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="cpf">  Nome </label>
            <input
              type="text"
              placeholder="Digite o nome do funcionário"
              className={styles.input}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="cpf">  Endereço </label>
            <input
              type="text"
              placeholder="Digite o Endereço do funcionário"
              className={styles.input}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="cpf">  Telefone </label>
            <input
              type="text"
              placeholder="Digite o telefone do funcionário"
              className={styles.input}
            />
            
          </form>
          <button type="submit" className={styles.button}> Registrar </button>
        </div>
      </div>
    </div>
  );
};

export default CadFuncionario;

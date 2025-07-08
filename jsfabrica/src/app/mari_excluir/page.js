"use client";
import React, { useState } from "react";
import styles from "./excluir.module.css";
import Image from "next/image";

const ExcluirFunci = ({ isOpen, setOpenModal }) => {
  if (!isOpen) return null;

  const [inputId, setInputId] = useState('');
  const [senhaAdm, setSenhaAdm] = useState('');

  
  const handleExcluir = async () => {
    const confirmacao = confirm("Tem certeza que deseja excluir este plano?");
    if (!confirmacao) return;

    try {
      const response = await fetch(`https://ifitnessapi.dev.vilhena.ifro.edu.br/planos/${inputId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao excluir o plano");
      }

      alert("Plano excluído com sucesso!");
      setOpenModal(false); // Fecha o modal
    } catch (error) {
      console.error("Erro ao excluir:", error.message);
      alert("Erro ao excluir o plano.");
    }
  };

  return (
    <div className={styles.fundo}>
      <div className={styles.vendas}>
        <Image
          className={styles.fechar}
          src='/Image/botao-x.png'
          alt='Imagem do álbum do Bon Jovi'
          width={20}
          height={20}
          onClick={() => setOpenModal(false)}
        />
        <div className={styles.div}>
          <h1>Excluir Cadastro</h1>
          <form action="/login" method="post">
            <label className={styles.label} htmlFor="plano">ID do item a ser excluído</label>
            <input
              type="text"
              placeholder="Digite o ID"
              className={styles.input}
              value={inputId} 
              onChange={(e) => setInputId(e.target.value)}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="valor">Senha do Adm</label>
            <input
              type="text"
              placeholder="Digite a senha"
              className={styles.input}
              value={senhaAdm} 
              onChange={(e) => setSenhaAdm(e.target.value)}
            />
          </form>
          <button type="submit" onClick={handleExcluir} className={styles.button}>
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExcluirFunci;

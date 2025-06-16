
'use client';

import React, { useState} from "react";
import styles from "./c-cargos.module.css";
import Image from "next/image";

const Cadcargo = ({ isOpen, setOpenModal }) => {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    if (!isOpen) return null;

      const resetForm = () => {
        setNome("");
        setDescricao("");
        setPreco("");
      };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("https://ifitnessapi.dev.vilhena.ifro.edu.br/planos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nome,
            descricao,
            preco
          })
        });
  
        const data = await response.json();
  
        if (response.ok) {
          alert("Funcionário cadastrado com sucesso!");
          resetForm();
          setOpenModal(false); // fecha o modal
        } else {
          alert("Erro ao cadastrar: " + data.message);
        }
      } catch (error) {
        console.error("Erro ao conectar com a API:", error);
        alert("Erro ao conectar com o servidor:\n" + error.message);
      }
    };
  

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
          <h1>Cadastrar Planos</h1>
          <form onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="plano"> Nome </label>
            <input
              type="text"
              placeholder="Digite o nome do plano"
              className={styles.input}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="cpf">  Descrição </label>
            <input
              type="text"
              placeholder="Digite a Descrição do plano"
              className={styles.input}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          <label className={`${styles.label} ${styles.valor}`} htmlFor="cpf"> Valor </label>
            <input
              type="text"
              placeholder="Digite a Descrição do plano"
              className={styles.input}
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
           
           <button type="submit" className={styles.button} onClick={handleSubmit}> Registrar </button>
            
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default Cadcargo;

/*luiz*/


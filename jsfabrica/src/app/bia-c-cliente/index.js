'use client';

import React,{useState}from "react";
import styles from "./cliente.module.css";
import Image from "next/image";
//importa

const CadCliente = ({ isOpen, setOpenModal }) => {
    if (!isOpen) return null;

       const [nome, setNome] = useState("");
       const [cpf, setCpf] = useState("");
       const [endereco, setEndereco] = useState("");
       const [telefone, setTelefone] = useState("");
       const [plano, setPlano] = useState("");
        if (!isOpen) return null;
    
          const resetForm = () => {
            setNome("");
            setCpf("");
            setEndereco("");
            setTelefone("");
            setPlano("");
          };
    
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await fetch("https://ifitnessapi.dev.vilhena.ifro.edu.br/clientes", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                cpf,
                nome,
                endereco,
                telefone,
                plano
              })
            });
      
            const data = await response.json();
      
            if (response.ok) {
              alert("cliente cadastrado com sucesso!");
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
          <h1>Cadastrar Cliente</h1>
          <form onSubmit={handleSubmit}>
 
            <label className={`${styles.label} ${styles.valor}`} htmlFor="cpf">  CPF </label>
            <input
              type="text"
              placeholder="Digite o CPF do usuário"
              className={styles.input}
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="cpf">  Nome </label>
            <input
              type="text"
              placeholder="Digite o nome do usuário"
              className={styles.input}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="cpf">  Endereço </label>
            <input
              type="text"
              placeholder="Digite o Endereço do usuário"
              className={styles.input}
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="cpf">  Telefone </label>
            <input
              type="text"
              placeholder="Digite o telefone do usuário"
              className={styles.input}
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <label className={styles.label} htmlFor="plano"> Plano </label>
            <input
              type="text"
              placeholder="Digite o plano do usuário"
              className={styles.input}
              value={plano}
              onChange={(e) => setPlano(e.target.value)}
            />
              <button type="submit" className={styles.button}> Registrar </button>
            
          </form>
        
        </div>
      </div>
    </div>
  );
};

export default CadCliente;
 //testeeeeeeeeeeee
 //Amanhã vai ser outro dia
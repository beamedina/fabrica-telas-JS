'use client';
import React, { useState } from "react";
import styles from "./login.module.css";


const Login = ({ isOpen, setOpenModal, testeLogin }) => {
  if (!isOpen) return null;

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const resetForm = () => {
    setEmail("");
    setSenha("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://ifitnessapi.dev.vilhena.ifro.edu.br/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("funcionário logado com sucesso");
        resetForm();
        setOpenModal(false);  
        testeLogin();         
      } else {
        alert("Erro ao cadastrar: " + data.message);
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
      alert("Erro ao conectar com o servidor:\n" + error.message);
    }
  };

  return (
    <div className={styles.fundo}>
      <div className={styles.vendas}>
        
        <div className={styles.div}>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="User"> User </label>
            <input
              type="text"
              placeholder="Digite o usuário"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="Senha"> Senha </label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className={styles.input}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button type="submit" className={styles.button}> Registrar </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

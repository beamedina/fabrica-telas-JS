// AtCliente.js
"use client";

import React, { useState, useEffect } from "react";
import styles from "./atcliente.module.css";
import Image from "next/image";

const AtCliente = ({ isOpen, setOpenModal, dadosOriginais, atualizar }) => {
  if (!isOpen || !dadosOriginais) return null; 

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [plano, setPlano] = useState("");

  useEffect(() => {
    setNome(dadosOriginais.nome || "");
    setCpf(dadosOriginais.cpf || "");
    setEndereco(dadosOriginais.endereco || "");
    setTelefone(dadosOriginais.telefone || "");
    setPlano(dadosOriginais.plano || "");
  }, [dadosOriginais, isOpen]);

 const handleSubmit = async (e) => {
  e.preventDefault();

  const url = `https://ifitnessapi.dev.vilhena.ifro.edu.br/clientes/${dadosOriginais.idCLIENTE}`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cpf,
        nome,
        endereco,
        telefone,
        plano,
      }),
    });

    const responseText = await response.text();

    if (response.ok) {
      alert("Cliente atualizado com sucesso!");
      setOpenModal(false);
      if(atualizar) atualizar()
    } else {
      alert("Erro ao atualizar: " + responseText);
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
          alt='Fechar'
          width={20}
          height={20}
          onClick={() => setOpenModal(false)}
        />
        <div className={styles.div}>
          <h1>Atualizar Cliente</h1>
          <form onSubmit={handleSubmit}>
            <label className={`${styles.label} ${styles.valor}`}>CPF</label>
            <input
              type="text"
              placeholder="Digite o CPF"
              className={styles.input}
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <label className={`${styles.label} ${styles.valor}`}>Nome</label>
            <input
              type="text"
              placeholder="Digite o nome"
              className={styles.input}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label className={`${styles.label} ${styles.valor}`}>Endereço</label>
            <input
              type="text"
              placeholder="Digite o endereço"
              className={styles.input}
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
            <label className={`${styles.label} ${styles.valor}`}>Telefone</label>
            <input
              type="text"
              placeholder="Digite o telefone"
              className={styles.input}
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <label className={styles.label}>Plano</label>
            <input
              type="text"
              placeholder="Digite o plano"
              className={styles.input}
              value={plano}
              onChange={(e) => setPlano(e.target.value)}
            />
            <button type="submit" className={styles.button}>
              Atualizar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AtCliente;

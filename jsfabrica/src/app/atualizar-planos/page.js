'use client';

import React, { useState, useEffect } from "react";
import styles from "./atplano.module.css";
import Image from "next/image";

const AtPlanos = ({ isOpen, setOpenModal, dadosOriginais, atualizar }) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

 
  useEffect(() => {
    if (isOpen && dadosOriginais) {
      setNome(dadosOriginais.nome || "");
      setDescricao(dadosOriginais.descricao || "");
      setPreco(dadosOriginais.preco || "");
    }
  }, [isOpen, dadosOriginais]);


  if (!isOpen) return null;

  const resetForm = () => {
    setNome("");
    setDescricao("");
    setPreco("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `https://ifitnessapi.dev.vilhena.ifro.edu.br/planos/${dadosOriginais.idPlano}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          descricao,
          preco,
        }),
      });

      const responseText = await response.text();

      if (response.ok) {
        alert("Plano atualizado com sucesso!");
        setOpenModal(false);
        if (atualizar) atualizar();
        resetForm();
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
          src="/Image/botao-x.png"
          alt="Fechar"
          width={20}
          height={20}
          onClick={() => setOpenModal(false)}
        />
        <div className={styles.div}>
          <h1>Atualizar Plano</h1>
          <form onSubmit={handleSubmit}>
            <label className={styles.label}>Nome</label>
            <input
              type="text"
              placeholder="Digite o nome do plano"
              className={styles.input}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label className={styles.label}>Descrição</label>
            <input
              type="text"
              placeholder="Digite a descrição do plano"
              className={styles.input}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <label className={styles.label}>Valor</label>
            <input
              type="text"
              placeholder="Digite o valor do plano"
              className={styles.input}
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />

            <button type="submit" className={styles.button}>
              Atualizar Plano
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AtPlanos;

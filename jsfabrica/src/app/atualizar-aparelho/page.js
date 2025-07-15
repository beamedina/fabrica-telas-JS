'use client';
import React, {useState, useEffect} from "react";
import styles from "./atAparelhos.module.css";
import Image from "next/image";

const AtAparelhos = ({ isOpen, setOpenModal, dadosOriginais, atualizar }) => {
  if (!isOpen || !dadosOriginais) return null;

    const [nome, setNome] = useState("");
    const [local, setLocal] = useState("");
    const [quantidade, setQuantidade] = useState("");


      useEffect(() => {
        setNome(dadosOriginais.nome || "");
        setLocal(dadosOriginais.local || "");
        setQuantidade(dadosOriginais.quantidade || "");
      }, [dadosOriginais, isOpen]);


      

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!nome.trim() || !local.trim() || quantidade === "") {
    alert("Todos os campos devem ser preenchidos.");
    return;
  }

  const url = `https://ifitnessapi.dev.vilhena.ifro.edu.br/aparelhos/${dadosOriginais.idAparelho}`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        local,
        quantidade: Number(quantidade),
      }),
    });

    const responseText = await response.text();

    if (response.ok) {
      alert("Aparelho atualizado com sucesso!");
      setOpenModal(false);
      if (atualizar) atualizar();
    } else {
      alert("Erro ao atualizar: " + responseText);
    }
  } catch (error) {
    console.error("Erro ao conectar com a API:", error);
    alert("Erro ao conectar com o servidor:\n" + error.message);
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
         onClick={() => setOpenModal (false)} 
              />
        <div className={styles.div}>
          <h1>atualizar Aparelhos</h1>
          <form onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="nome"> Nome </label>
            <input
              type="text"
              placeholder="Digite o nome do aparelho"
              className={styles.input}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label className={`${styles.label} ${styles.valor}`} htmlFor="Peso">  Local </label>
            <input
              type="text"
              placeholder="Digite o local do aparelho"
              className={styles.input}
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            />

             <label className={`${styles.label} ${styles.valor}`} htmlFor="Peso"> Quantidade </label>
            <input
              type="number"
              placeholder="Digite o a quantidade de aparelhos"
              className={styles.input}
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
              <button type="submit" className={styles.button}> Atualizar </button>
          </form>
        
        </div>
      </div>
    </div>
  );
};

export default AtAparelhos;

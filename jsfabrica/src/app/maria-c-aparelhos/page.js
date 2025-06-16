import React, {useState} from "react";
import styles from "./cadastrar_aparelhos.module.css";
import Image from "next/image";

const CadAparelhos = ({ isOpen, setOpenModal  }) => {
  if (!isOpen) return null; 

    const [nome, setNome] = useState("");
    const [local, setLocal] = useState("");
    const [quantidade, setQuantidade] = useState("");
    if (!isOpen) return null;

      const resetForm = () => {
        setNome("");
        setLocal("");
        setQuantidade("");
      };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("https://ifitnessapi.dev.vilhena.ifro.edu.br/aparelhos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nome,
            local,
            quantidade
          })
        });
  
        const data = await response.json();
  
        if (response.ok) {
          alert("aparelho cadastrado com sucesso!");
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
          <h1>Cadastrar Aparelhos</h1>
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
              <button type="submit" className={styles.button}> Registrar </button>
          </form>
        
        </div>
      </div>
    </div>
  );
};

export default CadAparelhos;

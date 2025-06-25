"use client";
import React, { useState, useEffect } from "react";
import styles from "./aparelho.module.css";
import Header from "@/components/Header";
import CadAparelhos from "../maria-c-aparelhos/page";
import ExcluirFunci from "../mari_excluir/page";

const RegistroAparelhos = () => {
  const [openModalExcluir, setOpenModalExcluir] = useState(false); // excluir funcionario
  const [openModalAparelhos, setOpenModalAparelhos] = useState(false);
  const [aparelho, setAparelho] = useState([]);
  const [nomePesquisa, setNomePesquisa] = useState(""); // cadastro aparelhos
 const getAparelhos = async () => {
      try {
        
        const response = await fetch('https://ifitnessapi.dev.vilhena.ifro.edu.br/aparelhos');
        
       
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }
        
       
        const data = await response.json();
        
       
        setAparelho(data);
        
        
        console.log("Dados dos funcionários:", data);
      } catch (error) {
   
        console.error('Ocorreu um erro ao buscar os dados:', error.message);
        setError(error.message);
      } 
    };

    const handleExcluir = async (id) => {
  const confirmacao = confirm("Tem certeza que deseja excluir este aparelho?");
  if (!confirmacao) return;

  try {
    const response = await fetch(`https://ifitnessapi.dev.vilhena.ifro.edu.br/aparelhos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao excluir o aparelho");
    }

    
    await getAparelhos();
    alert("Aparelho excluído com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir:", error.message);
    alert("Erro ao excluir o aparelho.");
  }
};




const handlePesquisar = async () => {
    if (!nomePesquisa.trim()) {
      getAparelhos();
      return;
    }

    try {
      const response = await fetch(`https://ifitnessapi.dev.vilhena.ifro.edu.br/aparelhos/${nomePesquisa}`);
      if (!response.ok) {
        throw new Error("Funcionário não encontrado");
      }
      const data = await response.json();
      setAparelho(data);
    } catch (error) {
      console.error("Erro ao pesquisar funcionário:", error.message);
      setAparelho([]); 
    }
  };


  
    useEffect(() => {
      getAparelhos();
    }, []);

  return (
    <div>
      <Header />
      <main>
<div className={styles.pesquisaContainer}>
          <input
            type="text"
            placeholder="Pesquisar por nome"
            value={nomePesquisa}
            onChange={(e) => setNomePesquisa(e.target.value)}
            className={styles.campoPesquisa}
          />
          <button onClick={handlePesquisar} className={styles.botaoPesquisa}>
            Pesquisar
          </button>
        </div>


        <h1 className={styles.title}>Registro de Aparelhos</h1>
        <div className={styles.container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Aparelho</th>
                <th>Local</th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>
             {aparelho.map((aparelho) => (
                <tr key={aparelho.idAparelho}>
                  <td>{aparelho.idAparelho}</td>
                  <td>{aparelho.nome}</td>
                  <td>{aparelho.local}</td>
                  <td>
             <button
           onClick={() => handleExcluir(aparelho.idAparelho)}
             className={styles.botaoExcluir}
        >
          Excluir
        </button>
        </td>

              </tr>
               ))}
            </tbody>
          
          </table>
        </div>
        <div className={styles.botoes}>
          <button
            className={styles.botaoPrimario}
            type="submit"
            onClick={() => setOpenModalAparelhos(true)}
          >
            REGISTRAR APARELHO
          </button>
          <button
            className={styles.botaoSecundario}
            type="submit"
            onClick={() => setOpenModalExcluir(true)}
          >
            EXCLUIR APARELHO
          </button>
        </div>
        <CadAparelhos isOpen={openModalAparelhos} setOpenModal={setOpenModalAparelhos} />
        <ExcluirFunci isOpen={openModalExcluir} setOpenModal={setOpenModalExcluir} />
      </main>
    </div>
  );
};

export default RegistroAparelhos;

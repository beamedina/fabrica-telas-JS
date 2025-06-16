"use client";
import React, { useState, useEffect } from "react";
import styles from "./aparelho.module.css";
import Header from "@/components/Header";
import CadAparelhos from "../maria-c-aparelhos/page";
import ExcluirFunci from "../mari_excluir/page";

const RegistroAparelhos = () => {
  const [openModalExcluir, setOpenModalExcluir] = useState(false); // excluir funcionario
  const [openModalAparelhos, setOpenModalAparelhos] = useState(false);
  const [aparelho, setAparelho] = useState([]); // cadastro aparelhos
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
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getAparelhos();
    }, []);

  return (
    <div>
      <Header />
      <main>
        <h1 className={styles.title}>Registro de Aparelhos</h1>
        <div className={styles.container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Aparelho</th>
                <th>Local</th>
                
              </tr>
            </thead>
            <tbody>
             {aparelho.map((aparelho) => (
                <tr key={aparelho.idAparelho}>
                  <td>{aparelho.idAparelho}</td>
                  <td>{aparelho.nome}</td>
                  <td>{aparelho.local}</td>

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

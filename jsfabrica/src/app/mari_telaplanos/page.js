"use client";
import React, { useState, useEffect } from "react";
import styles from "./planos.module.css";
import Header from "@/components/Header";
import AtPlanos from "../atualizar-planos/page";

const Planos = () => {
  const [plano, setPlano] = useState([]);
  const [openModalPlanos, setOpenModalPlanos] = useState(false);
  const [planoSelecionado, setPlanoSelecionado] = useState(null);
  const [opneModalAtplanos, setOpenModalAtPlanos] = useState(false)

 const getPlanos = async () => {
    try {
      const response = await fetch("https://ifitnessapi.dev.vilhena.ifro.edu.br/planos");
      if (!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.statusText}`);
      }
      const data = await response.json();
      setPlano(data);
      console.log("Dados dos planos:", data);
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os dados:", error.message);
    }
  };


  useEffect(() => {
    getPlanos();
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.mainPlanos}>
        <section className={styles.plansSection}>
          {plano.map((planoItem, index) => (
            <div key={index}>
              <h2>{planoItem.nome}</h2>
              <div className={styles.plan}>
                <p>{planoItem.preco}</p>
                <p>{planoItem.idPlano}</p>
                <ul>
                  <li className={styles[`liPlano${planoItem.nome}`]}>
                    {planoItem.descricao}
                  </li>
                </ul>
                <button
                  onClick={() => {
                    setPlanoSelecionado(planoItem.id);
                    setOpenModalPlanos(true);
                  }}
                  className={styles.botaoAtualizar}
                >
                  Excluir
                </button>
                <button
                  onClick={() => {
                    setPlanoSelecionado(planoItem);
                    setOpenModalAtPlanos(true);
                  }}
                  className={styles.botaoExcluir}
                >
                  Atualizar
                </button>
              </div>
            </div>
          ))}
        </section>


        <AtPlanos
         isOpen={opneModalAtplanos}
         setOpenModal={setOpenModalAtPlanos}
         dadosOriginais={planoSelecionado}
         atualizar={getPlanos}
        />
      </main>
    </div>
  );
};

export default Planos;

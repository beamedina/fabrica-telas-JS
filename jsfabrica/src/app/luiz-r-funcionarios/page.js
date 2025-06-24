"use client";
import React, { useState, useEffect } from "react";
import styles from "./r-funcionarios.module.css";
import Header from "@/components/Header";
import CadFuncionario from "../Leticia-c-funcionario/page";
import ExcluirFunci from "../mari_excluir/page";

const RegistroFuncionario = () => {
  const [openModalExcluir, setOpenModalExcluir] = useState(false);
  const [openModalFuncionario, setOpenModalFuncionario] = useState(false);
  const [funcionarios, setFuncionarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nomePesquisa, setNomePesquisa] = useState("");

  const getFuncionarios = async () => {
    try {
      const response = await fetch('https://ifitnessapi.dev.vilhena.ifro.edu.br/funcionarios');
      if (!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.statusText}`);
      }
      const data = await response.json();
      setFuncionarios(data);
      console.log("Dados dos funcionários:", data);
    } catch (error) {
      console.error('Ocorreu um erro ao buscar os dados:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePesquisar = async () => {
    if (!nomePesquisa.trim()) {
      getFuncionarios();
      return;
    }

    try {
      const response = await fetch(`https://ifitnessapi.dev.vilhena.ifro.edu.br/funcionarios/${nomePesquisa}`);
      if (!response.ok) {
        throw new Error("Funcionário não encontrado");
      }
      const data = await response.json();
      setFuncionarios(data);
    } catch (error) {
      console.error("Erro ao pesquisar funcionário:", error.message);
      setFuncionarios([]); 
    }
  };

  useEffect(() => {
    getFuncionarios();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1 className={styles.title}>Registro de Funcionários</h1>

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

        <div className={styles.container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cargo</th>
                <th>CPF</th>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>RG</th>
                <th>CNH</th>
              </tr>
            </thead>
            <tbody>
              {funcionarios.map((funcionario) => (
                <tr key={funcionario.idFUNCIONARIO}>
                  <td>{funcionario.idFUNCIONARIO}</td>
                  <td>{funcionario.cargo}</td>
                  <td>{funcionario.cpf}</td>
                  <td>{funcionario.nome}</td>
                  <td>{funcionario.endereco}</td>
                  <td>{funcionario.telefone}</td>
                  <td>{funcionario.email}</td>
                  <td>{funcionario.rg}</td>
                  <td>{funcionario.cnh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.botoes}>
          <button
            className={styles.botaoPrimario}
            type="button"
            onClick={() => setOpenModalFuncionario(true)}
          >
            REGISTRAR FUNCIONÁRIO
          </button>
          <button
            className={styles.botaoSecundario}
            type="button"
            onClick={() => setOpenModalExcluir(true)}
          >
            EXCLUIR FUNCIONÁRIO
          </button>
        </div>

        <CadFuncionario
          isOpen={openModalFuncionario}
          setOpenModal={setOpenModalFuncionario}
          onFuncionarioAdded={getFuncionarios}
        />
        <ExcluirFunci
          isOpen={openModalExcluir}
          setOpenModal={setOpenModalExcluir}
          onFuncionarioRemoved={getFuncionarios}
        />
      </main>
    </div>
  );
};

export default RegistroFuncionario;

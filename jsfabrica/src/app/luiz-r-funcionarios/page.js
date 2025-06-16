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

  const getFuncionarios = async () => {
    try {
      // Faz a requisição de forma assíncrona
      const response = await fetch('https://ifitnessapi.dev.vilhena.ifro.edu.br/funcionarios');
      
      // Verifica se a resposta foi bem-sucedida (status 200-299)
      if (!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.statusText}`);
      }
      
      // Converte a resposta em objeto
      const data = await response.json();
      
      // Atualiza o estado com os dados recebidos
      setFuncionarios(data);
      
      // Imprime os dados no console para depuração
      console.log("Dados dos funcionários:", data);
    } catch (error) {
      // Exibe mensagens de erro mais detalhadas no console
      console.error('Ocorreu um erro ao buscar os dados:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
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
"use client";
import React, { useState, useEffect } from "react";
import styles from "./cliente.module.css";
import Header from "@/components/Header";
import CadCliente from "../bia-c-cliente";
import ExcluirFunci from "../mari_excluir/page";

const RegistroClientes = () => {
  const [openModalExcluir, setOpenModalExcluir] = useState(false); // excluir funcionario
  const [openModalCliente, setOpenModalCliente] = useState(false); // cadastro cliente
  const [cliente, setCliente] = useState([]);


  const getClientes = async () => {
      try {
        
        const response = await fetch('https://ifitnessapi.dev.vilhena.ifro.edu.br/clientes');
        
       
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }
        
       
        const data = await response.json();
        
       
        setCliente(data);
        
        
        console.log("Dados dos funcionários:", data);
      } catch (error) {
   
        console.error('Ocorreu um erro ao buscar os dados:', error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getClientes();
    }, []);
  
  return (
    <div>
      <Header />
      <main>
        <h1 className={styles.title}>Registro de Clientes</h1>
        <div className={styles.container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>Plano</th>
              </tr>
            </thead>
            <tbody>
             {cliente.map((cliente) => (
                <tr key={cliente.idCLIENTE}>
                  <td>{cliente.idCLIENTE}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.endereco}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.plano}</td>
              </tr>
               ))}
            </tbody>
          </table>
        </div>
        <div className={styles.botoes}>
          <button
            className={styles.botaoPrimario}
            type="submit"
            onClick={() => setOpenModalCliente(true)}
          >
            REGISTRAR CLIENTE
          </button>
          <button
            className={styles.botaoSecundario}
            type="submit"
            onClick={() => setOpenModalExcluir(true)}
          >
            EXCLUIR CLIENTE
          </button>
        </div>
        <CadCliente isOpen={openModalCliente} setOpenModal={setOpenModalCliente} />
        <ExcluirFunci isOpen={openModalExcluir} setOpenModal={setOpenModalExcluir} />
      </main>
    </div>
  );
};

export default RegistroClientes;

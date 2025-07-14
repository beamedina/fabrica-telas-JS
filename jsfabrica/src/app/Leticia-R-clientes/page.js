"use client";
import React, { useState, useEffect } from "react";
import styles from "./cliente.module.css";
import Header from "@/components/Header";
import CadCliente from "../bia-c-cliente";
import ExcluirFunci from "../mari_excluir/page";
import AtCliente from "../atualizar-cliente/page";

const RegistroClientes = () => {
  const [openModalExcluir, setOpenModalExcluir] = useState(false);
  const [openModalCliente, setOpenModalCliente] = useState(false);
  const [openModalAtCliente, setOpenModalAtCliente] = useState(false);
  const [cliente, setCliente] = useState([]);
  const [nomePesquisa, setNomePesquisa] = useState("");
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  const getClientes = async () => {
    try {
      const response = await fetch("https://ifitnessapi.dev.vilhena.ifro.edu.br/clientes");
      if (!response.ok) throw new Error(`Erro ao buscar dados: ${response.statusText}`);
      const data = await response.json();
      setCliente(data);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error.message);
    }
  };

  const handleExcluir = async (id) => {
    if (!confirm("Tem certeza que deseja excluir este cliente?")) 
      return
    try {
      const response = await fetch(`https://ifitnessapi.dev.vilhena.ifro.edu.br/clientes/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erro ao excluir o cliente");
      await getClientes();
      alert("Cliente excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir:", error.message);
      alert("Erro ao excluir o cliente.");
    }
  };

  const handlePesquisar = async () => {
    if (!nomePesquisa.trim()) {
      getClientes();
      return;
    }
    try {
      const response = await fetch(`https://ifitnessapi.dev.vilhena.ifro.edu.br/clientes/${nomePesquisa}`);
      if (!response.ok) throw new Error("Cliente não encontrado");
      const data = await response.json();
      setCliente(data);
    } catch (error) {
      console.error("Erro ao pesquisar cliente:", error.message);
      setCliente([]);
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
                <th>Nome</th>
                <th>CPF</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>Plano</th>
                <th>Ações</th>
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
                  <td>
                    <button
                      onClick={() => {
                        setClienteSelecionado(cliente);
                        setOpenModalAtCliente(true);
                      }}
                      className={styles.botaoAtualizar}
                    >
                      Atualizar
                    </button>
                    <button
                      onClick={() => handleExcluir(cliente.idCLIENTE)}
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
            onClick={() => {
              setClienteSelecionado(null);
              setOpenModalCliente(true);
            }}
          >
            REGISTRAR CLIENTE
          </button>

        </div>

        <CadCliente
          isOpen={openModalCliente}
          setOpenModal={setOpenModalCliente}
          
        />
        <AtCliente
          isOpen={openModalAtCliente}
          setOpenModal={setOpenModalAtCliente}
          dadosOriginais={clienteSelecionado}
          atualizar={getClientes}
        />

        <ExcluirFunci
          isOpen={openModalExcluir}
          setOpenModal={setOpenModalExcluir}
        />
      </main>
    </div>
  );
};

export default RegistroClientes;

"use client";
import React, { useState } from "react";
import styles from "./cliente.module.css";
import Header from "@/components/Header";
import CadCliente from "../bia-c-cliente";
import ExcluirFunci from "../mari_excluir/page";

const RegistroClientes = () => {
  const [openModalExcluir, setOpenModalExcluir] = useState(false); // excluir funcionario
  const [openModalCliente, setOpenModalCliente] = useState(false); // cadastro cliente

  return (
    <div>
      <Header />
      <h1 className={styles.title}>Registro de Clientes</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Plano</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
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
    </div>
  );
};

export default RegistroClientes;

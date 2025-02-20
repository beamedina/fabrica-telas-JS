"use client";
import React, { useState } from "react";
import styles from "./r-funcionarios.module.css";
import Header from "@/components/Header";
import CadFuncionario from "../Leticia-c-funcionario/page";
import ExcluirFunci from "../mari_excluir/page";

const RegistroFuncionario = () => {
  const [openModalExcluir, setOpenModalExcluir] = useState(false); // excluir funcionario
  const [openModalFuncionario, setOpenModalFuncionario] = useState(false); // cadastro funcionario

  return (
    <div>
      <Header />
      <h1 className={styles.title}>Registro de Funcionários</h1>
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
          onClick={() => setOpenModalFuncionario(true)}
        >
          REGISTRAR FUNCIONÁRIO
        </button>
        <button
          className={styles.botaoSecundario}
          type="submit"
          onClick={() => setOpenModalExcluir(true)}
        >
          EXCLUIR FUNCIONÁRIO
        </button>
      </div>
      <CadFuncionario isOpen={openModalFuncionario} setOpenModal={setOpenModalFuncionario} />
      <ExcluirFunci isOpen={openModalExcluir} setOpenModal={setOpenModalExcluir} />
    </div>
  );
};

export default RegistroFuncionario;

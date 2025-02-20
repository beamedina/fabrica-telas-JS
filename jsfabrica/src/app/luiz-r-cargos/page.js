"use client";
import React, { useState } from "react";
import styles from "./r-cargos.module.css";
import Header from "@/components/Header";
import Cadcargo from "../luiz-c-cargos/page";
import ExcluirFunci from "../mari_excluir/page";

const RegistroCargo = () => {
  const [openModalExcluir, setOpenModalExcluir] = useState(false); // excluir cargos
  const [openModalCargos, setOpenModalCargos] = useState(false); // cadastro cargos

  return (
    <div>
      <Header />
      <main>
        <h1 className={styles.title}>Registro de Cargos</h1>
        <div className={styles.container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Cargos</th>
                <th>Descrição</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.botoes}>
          <button
            className={styles.botaoPrimario}
            type="submit"
            onClick={() => setOpenModalCargos(true)}
          >
            REGISTRAR CARGOS
          </button>
          <button
            className={styles.botaoSecundario}
            type="submit"
            onClick={() => setOpenModalExcluir(true)}
          >
            EXCLUIR CARGOS
          </button>
        </div>
        <Cadcargo isOpen={openModalCargos} setOpenModal={setOpenModalCargos} />
        <ExcluirFunci isOpen={openModalExcluir} setOpenModal={setOpenModalExcluir} />
      </main>
    </div>
  );
};

export default RegistroCargo;

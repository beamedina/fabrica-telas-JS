"use client";
import React, { useState } from "react";
import styles from "./registro.module.css";
import Header from "@/components/Header";
import Popup from "../bia-c-vendas";
import ExcluirFunci from "../mari_excluir/page";

const RegistroVendas = () => {
  const [openModalExcluir, setOpenModalExcluir] = useState(false); // excluir funci
  const [openModalVendas, setOpenModalVendas] = useState(false); // cadastro funcionario

  return (
    <div>
      <Header />
      <main>
        <h1 className={styles.title}>Registro de Vendas</h1>
        <div className={styles.container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Plano</th>
                <th>Valor</th>
                <th>Comprador</th>
                <th>Vendedor</th>
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
              </tr>
              <tr>
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
              </tr>
              <tr>
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
              </tr>
              <tr>
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
              </tr>
              <tr>
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
              </tr>
              <tr>
                <td></td>
                <td></td>
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
            onClick={() => setOpenModalVendas(true)}
          >
            REGISTRAR VENDAS
          </button>
          <button
            className={styles.botaoSecundario}
            type="submit"
            onClick={() => setOpenModalExcluir(true)}
          >
            EXCLUIR VENDAS
          </button>
        </div>
        <Popup isOpen={openModalVendas} setOpenModal={setOpenModalVendas} />
        <ExcluirFunci isOpen={openModalExcluir} setOpenModal={setOpenModalExcluir} />
      </main>
    </div>
  );
};

export default RegistroVendas;

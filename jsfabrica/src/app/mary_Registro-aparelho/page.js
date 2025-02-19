"use client";
import React, { useState } from "react";
import styles from "./aparelho.module.css"
import Header from "@/components/Header";

import CadAparelhos from "../maria-c-aparelhos/page";
import ExcluirFunci from "../mari_excluir/page";

const RegistroAparelhos = () => {

    const [openModalExcluir, setOpenModalExcluir] = useState(false);    // excluir funcionario
const [openModalAparelhos, setOpenModalAparelhos] = useState(false);  //cadastro aparelhos
    
  return (
    
    <div>
        <Header />
      <h1 className={styles.title}>Registro de aparelhos</h1>

      <table className={styles.table}>
        <tr>
          <th>Aparelho</th>
          <th>Peso</th>
          <th>ID</th>
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

        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    <div className={styles.botoes}>
      <button className={styles.botaoPrimario} type="submit"onClick={() => setOpenModalAparelhos(true)}>
        REGISTRAR APARELHO
      </button>
      <button className={styles.botaoSecundario} type="submit" onClick={() => setOpenModalExcluir(true)}>
        EXCLUIR APARELHO
      </button>
      </div>
      <CadAparelhos isOpen={openModalAparelhos} setOpenModal={setOpenModalAparelhos} />
      <ExcluirFunci isOpen={openModalExcluir} setOpenModal={setOpenModalExcluir} />
    </div>
  );
};

export default RegistroAparelhos;

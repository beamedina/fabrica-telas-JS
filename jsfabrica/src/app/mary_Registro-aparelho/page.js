import React from "react";
import styles from "./aparelho.module.css"

const RegistroAparelhos = () => {
  return (
    <div>
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
      <button className={styles.botaoPrimario} type="submit">
        REGISTRAR APARELHO
      </button>
      <button className={styles.botaoSecundario} type="submit">
        EXCLUIR APARELHO
      </button>
      </div>
    </div>
  );
};

export default RegistroAparelhos;

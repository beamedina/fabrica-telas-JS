import React from "react";
import styles from "./r-cargos.module.css.js"


export default function tabela() {
    const usuarios = [
        { cargo: "", descricao: "", id: 1 },
        { cargo: "", descricao: "", id: 2 },
        { cargo: "", descricao: "", id: 3 },
        { cargo: "", descricao: "", id: 4 },
        { cargo: "", descricao: "", id: 5 },
        { cargo: "", descricao: "", id: 6 },
        { cargo: "", descricao: "", id: 7 },
        { cargo: "", descricao: "", id: 8 },
        { cargo: "", descricao: "", id: 9 }

    ];

    return(
        <div>
            <h1> Registro de Cargos</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Cargo</th>
                        <th>Descrição</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map ((user) => (
                        <tr key={user.cargo}>
                            <td> {user.cargo} </td>
                            <td> {user.descricao} </td>
                            <td> {user.id} </td>

                        </tr>

                    ))}
                </tbody>
            </table>
            <button type="submit" className={styles.button}> Registrar Cargo </button>
            <button type="submit" className={styles.button}> Excluir Cargo </button>


        </div>

    );
}


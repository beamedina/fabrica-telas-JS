"use client"
import React, { useState } from "react";
import styles from "./funcionario.module.css";
import Image from "next/image";

const CadFuncionario = ({ isOpen, setOpenModal }) => {
  const [cargo, setCargo] = useState("");
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [rg, setRg] = useState("");
  const [cnh, setCnh] = useState("");
  const [busca, setBusca] = useState("");

  if (!isOpen) return null;

  const resetForm = () => {
    setCargo("");
    setCpf("");
    setNome("");
    setEndereco("");
    setTelefone("");
    setEmail("");
    setSenha("");
    setRg("");
    setCnh("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o refresh da página

    try {
      const response = await fetch("https://ifitnessapi.dev.vilhena.ifro.edu.br/funcionarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cargo,
          cpf,
          nome,
          endereco,
          telefone,
          email,
          senha,
          rg,
          cnh,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Funcionário cadastrado com sucesso!");
        resetForm();
        setOpenModal(false); // Fecha o modal
      } else {
        alert("Erro ao cadastrar: " + data.message);
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
      alert("Erro ao conectar com o servidor:\n" + error.message);
    }
  };

  return (
    <div className={styles.back}>
      <div className={styles.CadCliente}>
        <Image
          className={styles.fechar}
          src="/Image/botao-x.png"
          alt="Fechar"
          width={20}
          height={20}
          onClick={() => setOpenModal(false)}
        />
        <form className={styles.div} onSubmit={handleSubmit}>
          <h1>Cadastrar Funcionário</h1>

          <label className={styles.label}>Cargo</label>
          <input
            type="text"
            placeholder="Digite o cargo do funcionário"
            className={styles.input}
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />

          <label className={styles.label}>CPF</label>
          <input
            type="text"
            placeholder="Digite o CPF do funcionário"
            className={styles.input}
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />

          <label className={styles.label}>Nome</label>
          <input
            type="text"
            placeholder="Digite o nome do funcionário"
            className={styles.input}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label className={styles.label}>Endereço</label>
          <input
            type="text"
            placeholder="Digite o endereço do funcionário"
            className={styles.input}
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />

          <label className={styles.label}>Telefone</label>
          <input
            type="text"
            placeholder="Digite o telefone do funcionário"
            className={styles.input}
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          <label className={styles.label}>Email</label>
          <input
            type="text"
            placeholder="Digite o email do funcionário"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className={styles.label}>Senha</label>
          <input
            type="text"
            placeholder="Digite a senha do funcionário"
            className={styles.input}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <label className={styles.label}>RG</label>
          <input
            type="text"
            placeholder="Digite o RG do funcionário"
            className={styles.input}
            value={rg}
            onChange={(e) => setRg(e.target.value)}
          />

          <label className={styles.label}>CNH</label>
          <input
            type="text"
            placeholder="Digite a CNH do funcionário"
            className={styles.input}
            value={cnh}
            onChange={(e) => setCnh(e.target.value)}
          />

          <button type="submit" className={styles.button}>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadFuncionario;

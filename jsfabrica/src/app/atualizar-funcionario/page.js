"use client";
import React, { useState, useEffect } from "react";
import styles from "./atfuncionario.module.css";
import Image from "next/image";

const AtFuncionario = ({ isOpen, setOpenModal, dadosOriginais, atualizar }) => {
  const [cargo, setCargo] = useState("");
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [rg, setRg] = useState("");
  const [cnh, setCnh] = useState("");

  // Sempre execute hooks fora de ifs
  useEffect(() => {
    if (dadosOriginais) {
      setCargo(dadosOriginais.cargo || "");
      setCpf(dadosOriginais.cpf || "");
      setNome(dadosOriginais.nome || "");
      setEndereco(dadosOriginais.endereco || "");
      setTelefone(dadosOriginais.telefone || "");
      setEmail(dadosOriginais.email || "");
      setSenha(dadosOriginais.senha || "");
      setRg(dadosOriginais.rg || "");
      setCnh(dadosOriginais.cnh || "");
    }
  }, [dadosOriginais, isOpen]);

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
  e.preventDefault();

  try {
    const response = await fetch(
      `https://ifitnessapi.dev.vilhena.ifro.edu.br/funcionarios/${dadosOriginais.idFUNCIONARIO}`,
      {
        method: "PUT",
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
      }
    );

    const text = await response.text(); 

    if (response.ok) {
      alert("Funcionário atualizado com sucesso!");
      resetForm();
      setOpenModal(false);
      atualizar();
    } else {
      alert("Erro ao atualizar: " + text); 
    }
  } catch (error) {
    console.error("Erro ao conectar com a API:", error);
    alert("Erro ao conectar com o servidor:\n" + error.message);
  }
};


  // Aqui controlamos a exibição do conteúdo
  if (!isOpen) return null;

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
          <h1>Atualizar Funcionário</h1>

          <label className={styles.label}>Cargo</label>
          <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} className={styles.input} />

          <label className={styles.label}>CPF</label>
          <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} className={styles.input} />

          <label className={styles.label}>Nome</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className={styles.input} />

          <label className={styles.label}>Endereço</label>
          <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} className={styles.input} />

          <label className={styles.label}>Telefone</label>
          <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} className={styles.input} />

          <label className={styles.label}>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />

          <label className={styles.label}>Senha</label>
          <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)} className={styles.input} />

          <label className={styles.label}>RG</label>
          <input type="text" value={rg} onChange={(e) => setRg(e.target.value)} className={styles.input} />

          <label className={styles.label}>CNH</label>
          <input type="text" value={cnh} onChange={(e) => setCnh(e.target.value)} className={styles.input} />

          <button type="submit" className={styles.button}>Atualizar</button>
        </form>
      </div>
    </div>
  );
};

export default AtFuncionario;

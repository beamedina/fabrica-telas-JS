"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from 'next/image';

import CadCliente from "@/app/bia-c-cliente";
import ExcluirFunci from "@/app/mari_excluir/page";
import CadAparelhos from "@/app/maria-c-aparelhos/page";
import Login from "@/app/maria-t-login/page";
import CadFuncionario from "@/app/Leticia-c-funcionario/page";
import Cadcargo from "@/app/luiz-c-cargos/page";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const [openModalCliente, setOpenModalCliente] = useState(false); 
  const [openModalAparelhos, setOpenModalAparelhos] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalFuncionario, setOpenModalFuncionario] = useState(false);
  const [openModalExcluir, setOpenModalExcluir] = useState(false);
  const [openModalCargos, setOpenModalECargos] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <button onClick={() => setOpenModalLogin(true)}> 
          <Image
            className={styles.user}
            src='/Image/usuario.png'
            alt='Usuário'
            width={45}
            height={45}
          />
        </button>
      </div>
      <nav className={styles.nav}>
        <h1 className={styles.titulo}>
          {usuarioLogado ? `Bem-vindo, ${usuarioLogado}` : "IFitness"}
        </h1>

        <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
          <li className={styles.itemMenu}>
            <a className={styles.linkMenu} href="/">Home</a>
          </li>
          <li className={styles.itemMenu}>
            <a className={styles.linkMenu} href="#">Consultar</a>
            <ul className={styles.subMenu}>
              <li className={styles.itemSubMenu}>
                <a className={styles.linkSubmenu} href="/luiz-r-funcionarios">Funcionários</a>
              </li>
              <li className={styles.itemSubMenu}>
                <a className={styles.linkSubmenu} href="/Leticia-R-clientes">Clientes</a>
              </li>
              <li className={styles.itemSubMenu}>
                <a className={styles.linkSubmenu} href="/mari-r-aparelho">Aparelhos</a>
              </li>
            </ul>
          </li>
          <li className={styles.itemMenu}>
            <a className={styles.linkMenu} href="#">Cadastrar</a>
            <ul className={styles.subMenu}>
              <li className={styles.itemSubMenu} onClick={() => setOpenModalFuncionario(true)}>
                <a className={styles.linkSubmenu}>Funcionários</a>
              </li>
              <li className={styles.itemSubMenu} onClick={() => setOpenModalCliente(true)}>
                <a className={styles.linkSubmenu}>Clientes</a>
              </li>
              <li className={styles.itemSubMenu} onClick={() => setOpenModalAparelhos(true)}>
                <a className={styles.linkSubmenu}>Aparelhos</a>
              </li>
              <li className={styles.itemSubMenu} onClick={() => setOpenModalECargos(true)}>
                <a className={styles.linkSubmenu}>Planos</a>
              </li>
            </ul>
          </li>
          <li className={styles.itemMenu}>
            <a className={styles.linkMenu} href="/mari_telaplanos">Planos</a>
          </li>
          <li className={styles.itemMenu} onClick={() => setOpenModalExcluir(true)}>
            <a className={styles.linkMenu}>Excluir</a>
          </li>
        </ul>

        <form className={styles.search}>
          <input type="text" placeholder="Pesquisar" />
          <button type="submit">
            <Image
              className={styles.user}
              src='/Image/lupa.svg'
              alt='Pesquisar'
              width={10}
              height={10}
            />
          </button>
        </form>
      </nav>

      <div className={styles.mobile} onClick={toggleMenu}>
        <div className={`${styles.menuIcon} ${menuOpen ? styles.active : ""}`}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>

      <CadCliente isOpen={openModalCliente} setOpenModal={setOpenModalCliente} />
      <CadAparelhos isOpen={openModalAparelhos} setOpenModal={setOpenModalAparelhos} />
      <ExcluirFunci isOpen={openModalExcluir} setOpenModal={setOpenModalExcluir} />
      <Login 
        isOpen={openModalLogin} 
        setOpenModal={setOpenModalLogin}
        setUsuarioLogado={setUsuarioLogado}
        testeLogin={() => {}} // você pode ajustar isso se necessário
      />
      <CadFuncionario isOpen={openModalFuncionario} setOpenModal={setOpenModalFuncionario} />
      <Cadcargo isOpen={openModalCargos} setOpenModal={setOpenModalECargos} />
    </header>
  );
};

export default Header;

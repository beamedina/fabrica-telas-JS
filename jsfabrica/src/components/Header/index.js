"use client";
import Link from 'next/link';
import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from 'next/image';
import Popup from "@/app/bia-c-vendas";
import CadCliente from "@/app/bia-c-cliente";
import Cadcargo from "@/app/luiz-c-cargos/page";
import ExcluirFunci from "@/app/mari_excluir/page";
import CadAparelhos from "@/app/maria-c-aparelhos/page";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModalVendas, setOpenModalVendas] = useState(false);
  const [openModalCliente, setOpenModalCliente] = useState(false);
  const [openModalAparelhos, setOpenModalAparelhos] = useState(false);  //cadastro aparelhos
  const [openModalLogin, setOpenModalLogin] = useState(false); // login
  const [openModalCargos, setOpenModalCargos] = useState(false);  //cadastrar cargo
  const [openModalFuncionario, setOpenModalFuncionario] = useState(false); // cadastrar funcionario
  const [openModalExcluir, setOpenModalExcluir] = useState(false);    // excluir funcionario

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
            alt='Imagem do álbum do Bon Jovi'
            width={45}
            height={45}
          />
        </button>
      </div>
      <nav className={styles.nav}>
        <h1 className={styles.titulo}>IFitness</h1>
        <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
          <li className={styles.itemMenu}>
            <a className={styles.linkMenu} href="#">
              Home
            </a>
          </li>
          <li className={styles.itemMenu}>
            <a className={styles.linkMenu} href="#">
              Registros
            </a>
            <ul className={styles.subMenu}>
              <li className={styles.itemSubMenu}>
                <Link className={styles.linkSubmenu} href="/luiz-r-funcionarios">
                  Funcionários
                </Link>
              </li>
              <li className={styles.itemSubMenu}>
                <Link className={styles.linkSubmenu} href="/Leticia-R-clientes">
                  Clientes
                </Link>
              </li>
              <li className={styles.itemSubMenu}>
                <Link className={styles.linkSubmenu} href="/luiz-r-cargos">
                  Cargos
                </Link>
              </li>
              <li className={styles.itemSubMenu}>
                <Link className={styles.linkSubmenu} href="/mari_Registro-aparelho">
                  Aparelhos
                </Link>
              </li>
              <li className={styles.itemSubMenu}>
                <Link className={styles.linkSubmenu} href="/maria-r-vendas">
                  Vendas
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.itemMenu}>
            <a className={styles.linkMenu} href="#">
              Cadastramentos
            </a>
            <ul className={styles.subMenu}>
              <li className={styles.itemSubMenu} onClick={() => setOpenModalFuncionario(true)}>
                <a className={styles.linkSubmenu}>
                  Funcionários
                </a>
              </li>
              <li className={styles.itemSubMenu} onClick={() => setOpenModalCliente(true)}>
                <a className={styles.linkSubmenu}>
                  Clientes
                </a>
              </li>
              <li className={styles.itemSubMenu} onClick={() => setOpenModalCargos(true)}>
                <a className={styles.linkSubmenu}>
                  Cargos
                </a>
              </li>
              <li className={styles.itemSubMenu} onClick={() => setOpenModalAparelhos(true)}>
                <a className={styles.linkSubmenu}>
                  Aparelhos
                </a>
              </li>
              <li className={styles.itemSubMenu} onClick={() => setOpenModalVendas(true)}>
                <a className={styles.linkSubmenu}>
                  Vendas
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.itemMenu}>
            <a className={styles.linkMenu} href="/marianny/Telas_Planos/tela_planos.html">
              Planos
            </a>
          </li>
          <li className={styles.itemMenu} onClick={() => setOpenModalExcluir(true)}>
            <a className={styles.linkMenu}>
              Exclusão
            </a>
          </li>
        </ul>

        <form className={styles.search}>
          <input type="text" placeholder="Pesquisar" />
          <button type="submit">
            <Image
              className={styles.user}
              src='/Image/lupa.svg'
              alt='Imagem do álbum do Bon Jovi'
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
      <Popup isOpen={openModalVendas} setOpenModal={setOpenModalVendas} />
      <CadCliente isOpen={openModalCliente} setOpenModal={setOpenModalCliente} />
      <CadAparelhos isOpen={openModalAparelhos} setOpenModal={setOpenModalAparelhos} />
      <Cadcargo isOpen={openModalCargos} setOpenModal={setOpenModalCargos} />
      <ExcluirFunci isOpen={openModalExcluir} setOpenModal={setOpenModalExcluir} />
    </header>
  );
};

export default Header;
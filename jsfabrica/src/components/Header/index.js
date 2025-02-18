"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from 'next/image';
import Popup from "@/app/bia-c-vendas";
import CadCliente from "@/app/bia-c-cliente";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModalVendas, setOpenModalVendas] = useState(false); 
  const [openModalCliente, setOpenModalCliente] = useState(false); 
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
       <div className={styles.headerDiv}>
         <button> 
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
              <a className={styles.linkSubmenu} href="/Luiz/F-brica-de-Software--main/Registro_Funcionários/index.html">
                Funcionários
              </a>
            </li>
            <li className={styles.itemSubMenu}>
              <a className={styles.linkSubmenu} href="/Registro_Clientes leticia/registroclientes.html">
                Clientes
              </a>
            </li>
            <li className={styles.itemSubMenu}>
              <a className={styles.linkSubmenu} href="/Luiz/F-brica-de-Software--main/Registro_Cargos/index.html">
                Cargos
              </a>
            </li>
            <li className={styles.itemSubMenu}>
              <a className={styles.linkSubmenu} href="/marianny/Registro_de_aparelhos/registro_de_aparelho.html">
                Aparelhos
              </a>
            </li>
            <li className={styles.itemSubMenu}>
              <a className={styles.linkSubmenu} href="/Maria/Registro_de_Vendas/registro_vendas.html">
                Vendas
              </a>
            </li>
          </ul>
        </li>
        <li className={styles.itemMenu}>
          <a className={styles.linkMenu} href="#">
            Cadastramentos
          </a>
          <ul className={styles.subMenu}>
            <li className={styles.itemSubMenu}>
              <a className={styles.linkSubmenu} href="/Cadastrar_Funcionario leticia/cadastrarFuncionario.html">
                Funcionários
              </a>
            </li>
            <li className={styles.itemSubMenu} onClick={() => setOpenModalCliente(true)}>
              <a className={styles.linkSubmenu}>
                Clientes
              </a>
            </li>
            <li className={styles.itemSubMenu}>
              <a className={styles.linkSubmenu} href="/Luiz/F-brica-de-Software--main/Cadastrar_Cargos/index.html">
                Cargos
              </a>
            </li>
            <li className={styles.itemSubMenu}>
              <a className={styles.linkSubmenu} href="/Maria/Cadastrar_Aparelhos/cadastrar_aparelhos.html">
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
        <li className={styles.itemMenu}>
          <a className={styles.linkMenu} href="/marianny/Fabrica-de-software-main/Excluir_cadastro/excluir_cadastros.html">
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
    </header>
  );
};

export default Header;
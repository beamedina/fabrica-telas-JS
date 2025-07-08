"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Inicio from "./bia-telainicio";
import Login from "./maria-t-login/page";

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(true);
  const [logado, setLogado] = useState(false);

  function ConferirLogin() {
    setLoginOpen(false);
    setLogado(true);
  }

  return (
    <div className={styles.page}>
      {loginOpen && (
        <Login
          isOpen={loginOpen}
          setOpenModal={setLoginOpen}
          testeLogin={ConferirLogin}  // chama quando login OK
        />
      )}
      {logado && <Inicio />}
    </div>
  );
}

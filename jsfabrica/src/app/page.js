"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Inicio from "./bia-telainicio";

export default function Home() {
  return (
    <div className={styles.page}>
       <div>
        <Inicio></Inicio>
        </div>
      
    </div>
  );
}
 //mas um
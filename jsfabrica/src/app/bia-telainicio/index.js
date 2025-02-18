import Header from "@/components/Header";
import styles from './inicio.module.css';
import Image from "next/image";
import Footer from "@/components/Footer";

const Inicio = () => {
    return (
        <>
            <Header />
            <main className={styles.corpo}>
                <div className={styles.bemVindo}>
                    <h1>Bem-Vindo(a) ao IFitness!</h1>
                </div>
                <div className={styles.divImagens}>
                <Image className={styles.user} src='/Image/mulher.jpg' alt='muié' width={470} height={700} />
                <Image className={styles.user} src='/Image/mulher 2.jpg' alt='muié' width={470} height={700} />
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Inicio;

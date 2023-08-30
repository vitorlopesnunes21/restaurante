import styles from './Cardapio.module.scss'
import Logo from 'assets/logo2.png'
import Buscador from './Buscador';
import { useState } from 'react';

export default function Cardapio(){
    const [busca, setBusca] = useState("");
    return(
        <main>
            <nav className={styles.menu}>
                <img src={Logo} alt="Logo" className={styles.logo}/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    MANGIA CHE TE FA BENE
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
            </section>
        </main>
    );
}
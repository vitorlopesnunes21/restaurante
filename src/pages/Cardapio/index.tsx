import styles from './Cardapio.module.scss'
import Logo from 'assets/logo2.png'

export default function Cardapio(){
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
            <section>
                <h3>Cardápio</h3>
            </section>
        </main>
    );
}
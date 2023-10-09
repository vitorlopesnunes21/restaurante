import styles from "./Cardapio.module.scss";
import Logo from "assets/logo2.png";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtro from "./Filtros";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  return (
    <main className={styles.body}>
      <nav className={styles.menu}>
        <img src={Logo} alt="Logo" className={styles.logo} />

        <div className={styles.menu__email}>
          <h3>vitor.nunes36@etec.sp.gov.br</h3>
          <h3>vitorlopesnunes057684@gmail.com</h3>
        </div>
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>MANGIA CHE TE FA BENE</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}><Filtro /></div>
      </section>
    </main>
  );
}

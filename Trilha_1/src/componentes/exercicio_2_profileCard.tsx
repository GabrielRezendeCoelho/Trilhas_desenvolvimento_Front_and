import React from "react";
import styles from "../styles/exercicio_2_profileCard.module.css";

const Exercicio2ProfileCard = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.foto}
        src="https://tse2.mm.bing.net/th?id=OIP.Exl2PyiZ9eiG3MIibGA_OgHaEM&pid=Api&P=0&h=220"
        alt="Perfil"
      />
      <h2 className={styles.nome}>Prof Claudia</h2>
      <p className={styles.desc}>Desenvolvedor Front-end</p>
    </div>
  );
};

export default Exercicio2ProfileCard;

import Image from "next/image";
import Logo from "../../public/images/logo.svg"
import styles from"../Header/Header.module.scss"
import Button from "../Button/Button"



export default function Header() {
    return (
      <div className={styles.container}>
        <div className={styles.logoTipo}>
          <Image src={Logo} 
          alt="logo"/>
        </div>
        <div className={styles.menu}>
            <a href="/">Home</a>
            <a href="/">O que fazemos</a>
            <a href="/">Cases </a>
        </div>
        <div className={styles.action}>
          <Button title="Fale Conosco"/>
        </div>
      </div>
    );
  };
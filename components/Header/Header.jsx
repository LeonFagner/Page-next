import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import Styles from"../Header/Header.module.scss";
import Button from "../Button/Button";



export default function Header() {
    return (
      <div className={Styles.container}>
        <div className={Styles.logoTipo}>
          <Image src={Logo} 
          alt="logo"/>
        </div>
        <div className={Styles.menu}>
            <a href="/">Home</a>
            <a href="/">O que fazemos</a>
            <a href="/">Cases </a>
        </div>
        <div className={Styles.action}>
          <Button title="Fale Conosco"/>
        </div>
      </div>
    );
  };
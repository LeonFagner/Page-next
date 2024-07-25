import Styles from "./Footer.module.scss";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import Link from "next/link";
import IconInstagram from "/public/images/iconInstagram.svg"
import IconFacebook from "/public/images/iconFacebook.svg";
import IconLinkedin from "/public/images/iconLikedin.svg";
import IconYoutube from "/public/images/iconYoutube.svg";



export default function Footer(){

    return(
        <footer className={Styles.container}>
            <div className={`${Styles.column} ${Styles.columnPrincipal}`}>
                <Image src={Logo} alt="Logo footer" />
                <h1 className={Styles.title}>0800 800 800</h1>
                <p>comercial@agencia.com.br</p>
            </div>
            <div className={Styles.column}>
                <h1>MENU</h1>
                <p>Quem somos</p>
                <p>Cases</p>
            </div>
            <div className={Styles.column}>
                <h1>CONTEÚDO</h1>
                <p>E-books</p>
                <p>Fórmulas prontas</p>
            </div>
            <div className={`${Styles.column} ${Styles.alignRight}`}>
            
                <h1>SOCIAL</h1>
                <div className={Styles.icons}>
                <Link href="/">
                <Image src={IconLinkedin} alt="icon linkedin"/>
                </Link>
                <Link  href="/">
                <Image src={IconFacebook} alt="icon facebook"/>
                </Link>
                <Link  href="/">
                <Image src={IconInstagram} alt="icon instagram"/>
                </Link>
                <Link  href="/">
                <Image src={IconYoutube} alt="icon youtube" />
                </Link>

                </div>
               
            
                
            </div>
            <div className={Styles.allRightReserved}>
            ©2022 AGENCIA - Todos os direitos reservados.
            </div>
           
        </footer>
    )
}
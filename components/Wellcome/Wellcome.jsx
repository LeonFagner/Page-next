import Button from "../Button/Button"
import styles from "../Wellcome/Wellcome.module.scss"
import Leads from "/public/images/leads.svg"
import Background from "/public/images/background.svg"
import Image from "next/image"


export default function Wellcome(){

    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Melhor agência de marketing do bairro</h1>
                <p>
                    somos uma agência de perfomace digital, acelaramos vendas e aquisição de leads para grandes marcas.
                </p>
                <Button title="Aumentar vendas" kind="secundary"/>
            </div>
            <div className={styles.image}>
                <Image src={Leads} alt="Image de leads"/>
            </div>

        </div>
        
            


    )
}
import Button from "../Button/Button"
import styles from "../Wellcome/Wellcome.module.scss"

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

            </div>

        </div>
        
            


    )
}
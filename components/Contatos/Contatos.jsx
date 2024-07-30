"use client";
import Button from "../Button/Button";
import Styles from "./Contatos.module.scss";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";



export default  function Contatos (){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [site, setSite] = useState('');
    const [midia, setMidia] = useState('');
    

    const  SendEmail = async () => {
        await axios.post("/api/sendEmail",{messageBody:`Nome: ${nome}, Email: ${email}, Telefone: ${telefone}, Site: ${site}, Midia: ${midia}`,})
        .then(() => console.log("Uhuu"))
        .catch(() => console.log("opss"))
        
    }

    return(
        <div className={Styles.container}>
            <div className={Styles.text}>
                <span>ENTRE EM CONTATO</span>
                <h1>Aumente seu resultado de vendas e performance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            <div className={Styles.form}>
                <h1>Fale com um especialista</h1>
            <form >
                <Input 
                type="text" 
                placeholder="Nome completo" 
                onBlur={(event) =>  setNome(event.target.value)} 
                required />
                <Input type="email" placeholder="E-mail profissional" onBlur={(event) =>  setEmail(event.target.value)}  required/>
                <Input 
                type="text" 
                placeholder="Celular/Whatsapp"
                pattern="^[+]*[{]{0,1}[0-9]{1,4}[)]{0,1}[=\s\./0-9]*$"
                onBlur={(event) =>  setTelefone(event.target.value)} 
                required />
                <Input type="text" placeholder="Site"
                 onBlur={(event) =>  setSite(event.target.value)}  required/>
                <Select type="text" placeholder="Orçamento para midia" options={[
                    {label: "Instagram", Value:"instagram"},
                    {label: "Facebook", Value:"facebook"},
                ]}
                onChange={(event) => setMidia(event.target.value)} 
                required>
                    
                </Select>
            <Button title="Enviar" kind="full" onClick={() => SendEmail()} />    
            </form>   
            
               
            </div>
            <div className={Styles.footer}>
                <p>Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <Link href="/" className={Styles.none}><span> Política de Privacidade</span></Link> .</p>     
            </div>

        </div>
    )
}
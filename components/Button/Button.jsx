"use client";
import Styles from "./Button.module.scss"

export default function Button({title, kind, type}){
    const generationClassByKind = () => {
        if(kind === "secundary") return Styles.secundary
        if(kind === "full") return Styles.full;
        return Styles.primary;
    }
    
    return(
        <button className={`${Styles.button} ${generationClassByKind()}`}
        type={type}
         
         >
            {title}
        </button>
    )
}
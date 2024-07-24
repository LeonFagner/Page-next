import Styles from "./Input.module.scss";

export default function Input({type, placeholder, pattern, required}){

    return(
       
        <input
                type={type} 
                placeholder={placeholder}
                pattern={pattern}
                required={required}
                className={Styles.input}
        />
    )
}
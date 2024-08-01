import Styles from "./Input.module.scss";

export default function Input({type, placeholder, pattern, required,  name, id, onBlur,onChange,value }){

    return(
       
        <input  
                id={id}
                name={name}
                onBlur={onBlur}
                type={type} 
                placeholder={placeholder}
                pattern={pattern}
                required={required}
                className={Styles.input}
                onChange={onChange}
                value={value}
                
        />
    )
}
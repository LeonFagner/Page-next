import Styles from "./Select.module.scss"

export default function Select ({placeholder, required, options, onChange, id, name, value}){
    
    return(
        <select 
        className={Styles.select} 
        required={required} 
        onChange={onChange}
        id={id}
        name={name}
        value={value}
        >
            <option value="">{placeholder}</option>
            {options?.map((option,index) => (
                <option key={index} value={option.value}>{option.label}</option> 
            ))}
        </select>
    )
}
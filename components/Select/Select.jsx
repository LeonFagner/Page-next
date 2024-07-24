import Styles from "./Select.module.scss"

export default function Select ({placeholder, required, options}){
    
    return(
        <select className={Styles.select} required={required}>
            <option value="">{placeholder}</option>
            {
                options?.map((option,index) => (
                    <option key={index} value={option.value}>{option.label}</option> 
                ))
            }
        </select>
    )
}
import Styles from "./Select.module.scss"

export default function Select ({placeholder, required, options, onChange}){
    
    return(
        <select className={Styles.select} required={required} onChange={onChange}>
            <option value="">{placeholder}</option>
            {
                options?.map((option,index) => (
                    <option key={index} value={option.value}>{option.label}</option> 
                ))
            }
        </select>
    )
}
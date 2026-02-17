import React from 'react'
import style from './MyInput.module.css';

function MyInput({ type, placeholder, icon, required}) {
    return (
        <div className={style.inputBox}>
            <input type={type} placeholder={placeholder} required={required}/>
            {icon}
        </div>
    )
}

export default MyInput

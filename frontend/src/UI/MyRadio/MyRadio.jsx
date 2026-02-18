import React from 'react'
import style from './MyRadio.module.css'

function MyRadio({name , id , value, checked, onChange}) {
    return (
        <div className={style.box}>
            <input className={style.customRadio} type="radio" name={name} id={id} checked={checked}
                   onChange={onChange}/>
            <label className={style.customLabel} htmlFor={id}>{value}</label>
        </div>
    )
}

export default MyRadio

import { useState } from 'react'
import style from './Controls.module.css'
import { refresh } from './function';

export default function Main() {
    const [searchText,changeSearchText] = useState("");
    
    return (
        <div className={style.container}>
            <div className={style.controlContainer}>
                <input onChange={v=>changeSearchText(v.target.value)} value={searchText} placeholder='Search...' type="text" className={style.search} />
                <button onClick={_=>{refresh()}} className={style.button}>New</button>
            </div>
        </div>
    )
}


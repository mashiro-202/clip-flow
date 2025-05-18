import style from './Notification.module.css'
import { useState } from 'react'


const Main = ({text, show}) =>{
    const [message, setMessage] = useState(text)

    return(
        <>
            <div className={style.container} style={{display: show? 'flex': 'none'}}>
                <p className={style.text}>{message}</p>
            </div>
        </>
    )
}
export default Main
import style from './Footer.module.css'
import vpet from './assets/vpet.png'
import { refresh } from './function'

export default function Main(){
    return(
        <>
        <div className={style.container}>
            <img onClick={refresh} src={vpet} className={style.pet}/>
        </div>
        </>
    )
}
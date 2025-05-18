import style from './Card.module.css'
import { useState } from 'react'

export default function Main({Title = "null", Description = "null", Clip = "null", onClick = () => {}}) {
    const [title, setTitle] = useState(Title);
    const [desc, setDesc] = useState(Description);
    const [clip, setClip] = useState(Clip);
    const handleClick = () => {
        navigator.clipboard.writeText(clip)
        onClick()
    }
    return (
        <div onClick={handleClick} className={style.container} >
                <h3>{title}</h3>
                <p className={style.description}>{desc}</p>
        </div>
    )
}
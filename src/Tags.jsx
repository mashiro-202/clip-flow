import style from './Tags.module.css'

export default function Main(tagName) {
    const tag = tagName.tagName
    return (
        <div className={style.container}>
            <p>{tag}</p>
        </div>
    )
}


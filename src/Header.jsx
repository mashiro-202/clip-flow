import style from './Header.module.css'

export default function Main({Title}) {
    return (
        <div className={style.container}>
            <h1>{Title}</h1>
        </div>
    )
}


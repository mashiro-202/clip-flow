import style from './CardContainer.module.css'
import Card from './Card.jsx'
import Notification from './Notification'
import { useEffect, useState } from 'react'
import { fetchData } from './fetch.js'

export default function Main() {
    const [data, setData] = useState([]);
    const [showCopied, setShowCopied] = useState(false);
    useEffect(() => {
        async function loadData(){
          setData(await fetchData("data.json"))
        }
        loadData()
    },[])
    const handleClick = () => {
        setShowCopied(show => !show)
        setTimeout(() => {
            setShowCopied(false)
        }, 2000);
    }
    if(data.length === 0){
        return (
            <div className={style.cardContainer}>
                <p>Try create a new clip</p>
            </div>
        )
    }
    return (
        <>
            <div className={style.cardContainer}>
                {data.map(
                    (item,index) =><Card key={index} 
                                    Title={item.title} 
                                    Description={item.description} 
                                    Clip={item.clip}
                                    onClick = {handleClick}/>
                )}
            </div>
            <Notification show={showCopied} text={"Copied to clipboard"}/>
        </>
    )
}
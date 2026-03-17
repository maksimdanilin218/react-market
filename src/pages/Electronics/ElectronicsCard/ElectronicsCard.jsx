import style from "./ElectronicsCard.module.css"
import { Link } from "react-router-dom"
import { electronicsData } from "../../../data/ElectronicsData"

function ElectronicsItem({img, title, path, btn}){
    return(
        <div className={style.Card}>
            <img className={style.img} src={img} alt="" />
            <div className={style.info}>
                <h1 className={style.title}>{title}</h1>
                <Link className={style.link} to={path}>{btn}</Link>
            </div>
        </div>
    )
}

function ElectronicsCard(){
    return(
        <div className={style.container}>
            {electronicsData.map((item) => (
                <ElectronicsItem key={item.id} btn={item.btn} title={item.title} img={item.img} path={item.path}/>
            ))}
        </div>
    )
}

export default ElectronicsCard
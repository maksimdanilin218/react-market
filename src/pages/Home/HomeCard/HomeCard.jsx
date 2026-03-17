import style from "./HomeCard.module.css"
import { homeData } from "../../../data/HomeData"

function CardItem({ img, title, description }) {
    return (
        <div className={style.container}>
            <img className={style.img} src={img} alt="" />
            <div className={style.info}>
                <h1 className={style.title}>{title}</h1>
                <p className={style.description}>{description}</p>
                <button className={style.btn}>Подробнее</button>
            </div>
        </div>
    )
}

function HomeCard() {
    return (
        <div className={style.HomeCard}>
            {homeData.map((title) => (
                (
                    <CardItem key={title.id} title={title.title} description={title.description} img={title.img} />
                )
            ))}
        </div>
    )
}

export default HomeCard
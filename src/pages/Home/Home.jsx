import style from "./Home.module.css"
import HomeCard from "./HomeCard/HomeCard"

export default function Home() {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.info}>
                    <h1 className={style.title}>Добро пожаловать в Exodus</h1>
                    <h3 className={style.text}>Ваш надежный интерент-магазин!</h3>
                    <p className={style.description}>Мы предлогаем вам широкий ассортимент товаров по выгодным ценам для наших клиентов</p>
                    <button className={style.btn}>Перейти к покупками</button>
                </div>
            </div>
            <div className={style.cardSection}>
                <h1 className={style.title}>Почему выбирают нас</h1>
                <HomeCard />
            </div>
        </div>
    )
}
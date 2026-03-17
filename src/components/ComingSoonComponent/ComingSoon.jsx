import style from "./ComibgSoon.module.css"

export default function ComingSoon() {
    return (
        <div className={style.container}>
            <div className={style.infoContainer}>
                <h1 className={style.title}>Скоро Появится</h1>
                <p className={style.description}>Мы уже работаем над этой категорией</p>
            </div>
        </div>
    )
}
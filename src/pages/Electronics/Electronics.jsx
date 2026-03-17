import style from "./Electronics.module.css"
import ElectronicsCard from "./ElectronicsCard/ElectronicsCard"
export default function Electronics(){
    return(
        <div className={style.container}>
            <h1 className={style.title}>Электроника</h1>
            <p className={style.description}>Выберите категорию товаров из раздела Электроника</p>
            <ElectronicsCard />
        </div>
    )
}
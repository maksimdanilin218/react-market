import style from "./TV.module.css"
import { brandData } from "../../../data/BrandData"
import { filterBrandsByCategory } from "../../../utils/filterBrandsByCategory"
import BrandComponent from "../../../components/BrandComponents/BrandComponents"
import ProductList from "../../../components/ProductList/ProductList"

export default function TV(){
    const LaptopBrands = filterBrandsByCategory(brandData, "tv")

    return(
        <div className={style.container}>
            <h1 className={style.title}>Телевизоры</h1>
            <p className={style.description}>Выберите телевизор из нашего каталога</p>
            <BrandComponent category="tv" brands={LaptopBrands} />
            <h2 className={style.title}>Популярные Ноутбуки</h2>
            <ProductList category="tv" popular={true} />
        </div>
    )
}
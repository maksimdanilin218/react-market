import style from "./Smartphones.module.css"
import { brandData } from "../../../data/BrandData"
import { filterBrandsByCategory } from "../../../utils/filterBrandsByCategory"
import BrandComponent from "../../../components/BrandComponents/BrandComponents"
import ProductList from "../../../components/ProductList/ProductList"

export default function Smartphones(){
    const SmartphonesBrands = filterBrandsByCategory(brandData, "smartphones")

    return(
        <div className={style.container}>
            <h1 className={style.title}>Смартфоны</h1>
            <p className={style.description}>Выберите смартфона из нашего каталога</p>
            <BrandComponent category="smartphones" brands={SmartphonesBrands} />
            <h2 className={style.title}>Популярные смартфоны</h2>
            <ProductList category="smartphones" popular={true} />
        </div>
    )
}
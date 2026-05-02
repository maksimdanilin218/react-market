import style from "./TV.module.css"
import { useState } from "react"
import { brandData } from "../../../data/BrandData"
import { filterBrandsByCategory } from "../../../utils/filterBrandsByCategory"
import BrandComponent from "../../../components/BrandComponents/BrandComponents"
import ProductList from "../../../components/ProductList/ProductList"
import ProductInfo from "../../../components/ProductList/ProductInfo/ProductInfo"

export default function TV(){
    const LaptopBrands = filterBrandsByCategory(brandData, "tv");
    const [selectedProduct, setSelectedProduct] = useState(null);

    return(
        <div className={style.container}>
            <h1 className={style.title}>Телевизоры</h1>
            <p className={style.description}>Выберите телевизор из нашего каталога</p>
            <BrandComponent category="tv" brands={LaptopBrands} />
            <h2 className={style.title}>Популярные Ноутбуки</h2>
            <div className={style.layout}>
                <ProductList category="tv" popular={true} onSelect={setSelectedProduct} />
                <ProductInfo product={selectedProduct} />
            </div>
        </div>
    )
}
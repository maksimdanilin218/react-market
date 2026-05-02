import style from "./Laptop.module.css"
import { useState } from "react"
import { brandData } from "../../../data/BrandData"
import { filterBrandsByCategory } from "../../../utils/filterBrandsByCategory"
import BrandComponent from "../../../components/BrandComponents/BrandComponents"
import ProductList from "../../../components/ProductList/ProductList"
import ProductInfo from "../../../components/ProductList/ProductInfo/ProductInfo"

export default function Laptop(){
    const LaptopBrands = filterBrandsByCategory(brandData, "laptop")
    const [selectedProduct, setSelectedProduct] = useState(null);

    return(
        <div className={style.container}>
            <h1 className={style.title}>Ноутбуки</h1>
            <p className={style.description}>Выберите смартфона из нашего каталога</p>
            <BrandComponent category="laptop" brands={LaptopBrands} />
            <h2 className={style.title}>Популярные Ноутбуки</h2>
            <div className={style.layout}>
                <ProductList category="laptop" popular={true} onSelect={setSelectedProduct}/>
                <ProductInfo product={selectedProduct}/>
            </div>
        </div>
    )
}
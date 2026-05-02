import style from "./Smartphones.module.css"
import { useState } from "react";
import { brandData } from "../../../data/BrandData"
import { filterBrandsByCategory } from "../../../utils/filterBrandsByCategory"
import BrandComponent from "../../../components/BrandComponents/BrandComponents"
import ProductList from "../../../components/ProductList/ProductList"
import ProductInfo from "../../../components/ProductList/ProductInfo/ProductInfo";

export default function Smartphones(){
    const SmartphonesBrands = filterBrandsByCategory(brandData, "smartphones");
    const [selectedProduct, setSelectedProduct] = useState(null);

    return(
        <div className={style.container}>
            <h1 className={style.title}>Смартфоны</h1>
            <p className={style.description}>Выберите смартфона из нашего каталога</p>
            <BrandComponent category="smartphones" brands={SmartphonesBrands} />
            <h2 className={style.title}>Популярные смартфоны</h2>
            <div className={style.layout}>
                <ProductList category="smartphones" popular={true} onSelect={setSelectedProduct} />
                <ProductInfo  product={selectedProduct}/>
            </div>
        </div>
    )
}
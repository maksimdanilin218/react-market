import style from "./BrandPage.module.css"
import icon from "/cartIcon.png"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { brandData } from "../../data/BrandData";
import { productData } from "../../data/ProductData";
import ProductList from "../ProductList/ProductList";
import ProductInfo from "../ProductList/ProductInfo/ProductInfo";

export default function BrandPage() {
    const { brand, category } = useParams()
    const [selectedProduct, setSelectedProduct] = useState(null);
    const brandInfo = brandData.find(b => b.slug === brand)
    const filteredProduct = productData.filter(
        (product) =>
            product.category === category && product.brand === brand
    )
    return (
        <div className={style.Maincontainer}>
            <h1 className={style.title}>{brandInfo.title}</h1>
            <div className={style.layout}>
                <ProductList brand={brand} category={category} onSelect={setSelectedProduct} />
                <ProductInfo product={selectedProduct} />
            </div>
        </div>
    )
}
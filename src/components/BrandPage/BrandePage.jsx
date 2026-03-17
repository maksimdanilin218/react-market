import style from "./BrandPage.module.css"
import icon from "/cartIcon.png"
import { useParams } from "react-router-dom";
import { brandData } from "../../data/BrandData";
import { productData } from "../../data/ProductData";

export default function BrandPage() {
    const { brand, category } = useParams()
    const brandInfo = brandData.find(b => b.slug === brand)
    const filteredProduct = productData.filter(
        (product) => 
            product.category === category && product.brand === brand
    )
    return (
        <div className={style.container}>
            <h1 className={style.title}>{brandInfo.title}</h1>
            <div className={style.cardContainer}>
                {filteredProduct.map(phone => (
                    <div className={style.card}>
                        <img className={style.img} src={phone.img} alt="" />
                        <div className={style.info}>
                            <h3 className={style.name}>{phone.name}</h3>
                            <p className={style.price}>{phone.price}  ₽</p>
                            <button className={style.btn}>
                                <p className={style.btnText}>В Корзину</p>
                                <div className={style.iconContainer}>
                                    <img className={style.icon} src={icon} alt="" />
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
import style from "./ProductCard.module.css"
import icon from "/cartIcon.png"

function ProductCard({ product }) {
    return (
        <div className={style.card}>
            <img className={style.img} src={product.img} alt="" />
            <div className={style.info}>
                <h3 className={style.name}>{product.name}</h3>
                <p className={style.price}>{product.price}  ₽</p>
                <button className={style.btn}>
                    <p className={style.btnText}>В Корзину</p>
                    <div className={style.iconContainer}>
                        <img className={style.icon} src={icon} alt="" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default ProductCard
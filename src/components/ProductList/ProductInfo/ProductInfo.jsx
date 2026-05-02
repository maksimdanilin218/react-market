import style from "./ProductInfo.module.css"
import emptyImg from "/productList.png"
import cart from "/cartIcon.png"

function ProductInfo({ product }) {
    if (!product) {
        return (
            <div className={style.empty}>
                <h1 className={style.emptyTitle}>Пока нечего показывать</h1>
                <p className={style.emptyText}>пожалуйста, выберите товар</p>
                <img className={style.emptyImg} src={emptyImg} alt="Нет изображения" />
            </div>
        );
    }

    return (
        <div className={style.card}>
            <img
                src={product.img}
                alt={product.name}
                className={style.img}
            />
            {/* Info */}
            <div className={style.info}>
                <div className={style.header}>
                    <h2 className={style.title}>{product.name}</h2>
                    <div className={style.priceContainer}>
                        <p className={style.price}>{product.price} ₽</p>
                    <button className={style.favBtn}>
                        <svg className={style.favoriteIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" /></svg>
                    </button>
                    </div>
                </div>
                {/* Tags */}
                <div className={style.tags}>
                    <span className={style.tag}>{product.specs.storage}</span>
                    <span className={style.tag}>{product.specs.color}</span>
                    <span className={style.tag}>{product.specs.net}</span>
                </div>
                {/* Specs */}
                <div className={style.specs}>
                    <h1 className={style.specsTitle}>Характеристики</h1>
                    <div className={style.specRow}>
                        <span>Доствка</span>
                        <span>Завтра</span>
                    </div>
                    <div className={style.specRow}>
                        <span>Экран</span>
                        <span>{product.specs.screen}</span>
                    </div>
                    <div className={style.specRow}>
                        <span>Память</span>
                        <span>{product.specs.storage}</span>
                    </div>
                    <div className={style.specRow}>
                        <span>Камера</span>
                        <span>{product.specs.camera}</span>
                    </div>
                    <div className={style.specRow}>
                        <span>Аккумулятор</span>
                        <span>{product.specs.battery}</span>
                    </div>
                    <div className={style.specRow}>
                        <span>Операционная система</span>
                        <span>{product.specs.op}</span>
                    </div>
                </div>

                {/* Action */}
                <div className={style.actions}>
                    <button className={style.cartBtn}>
                        <p className={style.cartTitle}>Добавить в корзину</p>
                        <img className={style.cartIcon} src={cart} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;
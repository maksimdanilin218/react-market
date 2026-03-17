import style from "./BrandComponents.module.css"
import { Link } from "react-router-dom"


const BrandComponent = ({ brands, category }) => {
    const BrandList = ({ title, logo, brand}) =>{
        return (
            <div className={style.card}>
                <div className={style.logoContainer}>
                    <img className={style.logo} src={logo} alt={title} />
                </div>
                <div className={style.btnContainer}>
                    <Link className={style.link} to={`/electronics/${category}/${brand.slug}`}>Перейти</Link>
                </div>
            </div>
        )
    } 
    return (
        <div className={style.container}>
            {brands.map(brand => (
                <BrandList
                    key={brand.id}
                    title={brand.title}
                    logo={brand.logo}
                    brand={brand}
                />
            ))}
        </div>
    )
}



export default BrandComponent
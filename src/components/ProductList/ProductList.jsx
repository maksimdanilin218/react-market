import style from "./ProductList.module.css"
import { productData } from "../../data/ProductData";
import { filterProducts } from "../../utils/filterProducts";
import ProductCard from "./ProductCard/ProductCard";

function ProductList({ category, popular, brand, onSelect }) {
    const filteredProduct = filterProducts(productData, {
        category, brand, popular
    });
    return (
        <div className={style.container}>
            {filteredProduct.map((product) =>(
                <ProductCard key={product.id} product={product} onSelect={onSelect}/>
            ))}
        </div>
    )
}

export default ProductList
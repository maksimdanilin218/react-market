export function filterProducts(products, {category, brand, popular}){
    return products.filter((product) => {
        if(category && product.category !== category){
            return false;
        }
        if(brand && product.brand !== brand){
            return false;
        }
        if(popular && product.popular !== true){
            return false;
        }
        return true
    });
}
export const filterBrandsByCategory = (brandData, category) =>{
    return brandData.filter(brand => 
        brand.category.includes(category)
    )
}
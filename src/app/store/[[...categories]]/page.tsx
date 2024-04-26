import { ProductsWrapper } from "app/components/Store/ProductsWrapper"
import { getProducts } from "app/services/shopify/products"

interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

export default async function Category(props: CategoryProps){
  // console.log(props)
  const products = await getProducts()
  
  const { categories } = props.params
  // console.log(categories)
  // throw new Error('Error')
  return(
    <ProductsWrapper products={products}/>
  )
}
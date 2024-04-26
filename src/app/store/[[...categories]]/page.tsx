import { ProductsWrapper } from "app/components/Store/ProductsWrapper"
import { getCollectionProducts, getCollections } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"

interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

/**
 * This TypeScript React function fetches products based on selected categories and renders them using
 * a ProductsWrapper component.
 * @param {CategoryProps} props - CategoryProps
 * @returns The Category component is returning a ProductsWrapper component with the products fetched
 * based on the selected category or all products if no category is selected.
 */
export default async function Category(props: CategoryProps) {
  const { categories } = props.params
  let products = []
  const collections = await getCollections()
  
  if (categories?.length > 0) {
    const selectedCollectionId = collections.find((collection: any) => collection.handle === categories[0]).id
    products = await getCollectionProducts(selectedCollectionId)
  }else {
    products = await getProducts()
  }

  // console.log('products', products)

  return (
    <ProductsWrapper products={products} />
  )
}
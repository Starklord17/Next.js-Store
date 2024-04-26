interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

export default function Category(props: CategoryProps){
  // console.log(props)
  const { categories } = props.params
  // console.log(categories)
  // throw new Error('Error')
  return(
    <h1>Categoria dinámica: {categories}</h1>
  )
}
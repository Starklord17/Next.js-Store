import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections()

/* Inside the component, it is fetching collections asynchronously using the `getCollections` function. Once the collections are
fetched, it renders a `<main>` element containing a navigation bar (`<nav>`) and the children components passed to the `Layout` component. */
  return (
    <main>
      <nav>
        {
          collections.map((collection: any) => (
            <Link key={collection.id} href={'/store/' + collection.handle}>
              {collection.title}
            </Link>
          ))
        }
      </nav>
      {children}
    </main>
  )
}
import Link from "next/link"
import { ChatLink } from "app/components/Store/ChatLink"
import { getCollections } from "app/services/shopify/collections"
import styles from './StoreLayout.module.sass'

export const runtime = "edge"

/**
 * The function `Layout` is an async React component that fetches collections data and renders a layout
 * with navigation links and children components.
 * @param  - The `Layout` component is an asynchronous function that takes in a single parameter as an
 * object. The parameter object has a property `children` which is of type `React.ReactNode`.
 * @returns The Layout component is being returned, which includes a main element with a heading
 * "Explore", a navigation section with a list of collections as links, and the children components
 * passed to the Layout component.
 */
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();

  return (
    <main className={styles.StoreLayout}>
      <h1>Explore</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {
            collections?.map((collection: any) => (
              <Link key={collection.id} href={'/store/' + collection.handle} className={styles.StoreLayout__chip}>
                {collection.title}
              </Link>
            ))
          }
        </ul>
        <ChatLink />
      </nav>
      {children}
    </main>
  );
}

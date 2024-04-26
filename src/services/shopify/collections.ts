import { env } from "app/config/env"
import { shopifyUrls } from "./urls"

/**
 * The function `getCollections` fetches all smart collections from a Shopify store and transforms them
 * into a simplified format.
 * @returns The `getCollections` function returns an array of objects with properties `id`, `title`,
 * and `handle` for each collection fetched from the Shopify API.
 */
export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
      })
    })
    const { smart_collections } = await response.json()
    const transformedCollections = smart_collections.map((collection: any) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle
      }
    })
    return transformedCollections
  } catch (error) {
    console.log(error)
  }
}
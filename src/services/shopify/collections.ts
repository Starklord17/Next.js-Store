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

/**
 * This TypeScript function fetches products belonging to a specific collection from a Shopify store
 * using the provided collection ID.
 * @param {string} id - The `id` parameter in the `getCollectionProducts` function is a string that
 * represents the identifier of a collection in a Shopify store. This function is designed to fetch the
 * products belonging to the specified collection using the Shopify API.
 * @returns The `getCollectionProducts` function is returning the products belonging to a specific
 * collection identified by the `id` parameter. The products are fetched from a Shopify API endpoint
 * using the provided `id` and Shopify access token. If the request is successful, the function returns
 * the array of products. If an error occurs during the process, the error is logged to the console.
 */
export const getCollectionProducts = async (id: string) => {
    try {
      const response = await fetch(shopifyUrls.collections.products(id), {
        headers: new Headers({
          'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
        })
      })
      const { products } = await response.json()
      return products
    } catch (error) {
      console.log(error)
    }
  }
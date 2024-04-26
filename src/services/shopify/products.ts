import { env } from "app/config/env"
import { shopifyUrls } from "./urls"

/**
 * This TypeScript function asynchronously fetches products from a Shopify store using the provided
 * access token.
 * @returns The `getProducts` function is returning the array of products fetched from the Shopify API.
 */
export const getProducts = async () => {
  try {
    const response = await fetch(shopifyUrls.products.all, {
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
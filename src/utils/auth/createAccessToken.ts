import { GraphQLClientSingleton } from "app/graphql"
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreate"
import { cookies } from 'next/headers'

/**
 * The function `createAccessToken` in TypeScript creates a customer access token by sending a GraphQL
 * request with the provided email and password, and stores the token in a cookie if successful.
 * @param {string} email - The `email` parameter is a string that represents the email address of the
 * user trying to log in. It is used as part of the authentication process to verify the identity of
 * the user.
 * @param {string} password - The `password` parameter in the `createAccessToken` function is a string
 * that represents the password associated with the user's email for authentication purposes. It is
 * used as part of the input to request a customer access token from the GraphQL API.
 * @returns The function `createAccessToken` is returning the access token if it is successfully
 * created and stored in the cookies.
 */
export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = cookies()
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const { customerAccessTokenCreate }: {
    customerAccessTokenCreate: {
      customerAccessToken: {
        accessToken: string
        expiresAt: string
      }
    }
  }
    = await graphqlClient.request(customerAccessTokenCreateMutation, {
      "email": email,
      "password": password
    })

  const { accessToken, expiresAt } = customerAccessTokenCreate?.customerAccessToken

  if (accessToken) {
    cookiesStore.set("accessToken", accessToken, {
      path: "/",
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: "strict"
    })

    return accessToken
  }
}
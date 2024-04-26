// import React from "react";
import Image from "next/image";
// import { getProducts } from 'app/services/shopify'
import styles from "./MainProducts.module.sass";

interface Product {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: null | string;
  published_scope: string;
  tags: string;
  status: string;
  admin_graphql_api_id: string;
  variants: Array<{ /* Detalles de la variante */ id: number; title: string }>;
  options: Array<{ /* Detalles de las opciones */ name: string }>;
  images: Array<{
    /* Detalles de las imágenes */ src: any
    alt?: string;
    width: number;
    height: number;
  }>;
  image: {
    id: number;
    alt: null | string;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
    variant_ids: number[];
  };
}

/* const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
      {
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.SHOPIFY_TOKEN || "",
        }),
      }
    );
    // throw new Error('Error')
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
}; */

// Ventaja de los server components en Next.js => Pueden ser async
export const MainProducts = async () => {
  const response = await fetch('http://localhost:3000/api')
  const { products } = await response.json()
  // console.log(products)
  
  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product: Product) => {
          const imageSrc = product.images[0].src;
          const size = `${imageSrc.width}px`;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image
                src={imageSrc}
                fill
                sizes={size}
                alt={product.title}
                loading="eager"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};

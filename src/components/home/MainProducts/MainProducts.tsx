const getProducts = async () => {
  const res = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
    headers: new Headers ({
      'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || "",
    })
  });
  const data = await res.json();
  return data;
}

// Ventaja de los server components en Next.js => Pueden ser async
export const MainProducts = async () => {
  const products = await getProducts();
  console.log(products);
  
  return (
    <section>
      <h1>Main Products</h1>
    </section>
  );
};

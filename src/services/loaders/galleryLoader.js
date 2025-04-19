export default async function productsLoader() {
  const response = await fetch('https://dummyjson.com/products');
  const resData = await response.json();
  return resData.products;
}

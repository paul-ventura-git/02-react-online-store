export async function productEditLoader({ params }) {
  const response = await fetch('http://localhost:8080/products/' + params.id);
  const resData = await response.json();
  return resData.product;
}
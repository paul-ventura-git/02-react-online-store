export async function galleryDetailsLoader({ params }) {
  const response = await fetch('https://dummyjson.com/products/' + params.id);
  const resData = await response.json();
  return resData;
}
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="home container">
      <h1>Home</h1>
      <p>Bienvenido a nuestra tienda de productos electrónicos.</p>
      <p>Explora nuestra amplia gama de productos y encuentra lo que necesitas.</p>
      <Link to="/products">Ver Productos</Link>

    </div>
  )
}

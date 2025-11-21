import { Outlet, Link, useLoaderData } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineFileAdd } from "react-icons/ai";
import styles from '../assets/css/Products.module.css'
import { useState } from "react";

export default function Products() {
  const products = useLoaderData();

  // Estado para búsqueda automática
  const [search, setSearch] = useState("");

  // Filtrado en tiempo real
  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase()) ||
    item.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="my-container">
      <Outlet></Outlet>
      <div className="container">
        <br />
        <br />
        <h1>Productos</h1>
        <br />
        <div class="row">
          <div class="col">
            <Link className="nav-link" to="/products/create-product">
              <Button variant="warning"><AiOutlineFileAdd /> Nuevo Producto</Button>
            </Link>
          </div>
          <div class="col-4">
            {/* 🔍 Input de búsqueda automática */}
            <input
              type="text"
              placeholder="Buscar productos..."
              className="form-control mb-3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <Table responsive className="table-hover table-striped table-responsive">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>% Descuento</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Marca</th>
              <th>Peso</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {
              filteredProducts.map(item => {
                let editarProducto = 'edit-product/' + item.id;
                let eliminarProducto = 'delete-product/' + item.id;

                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.discount}</td>
                    <td>{item.rating}</td>
                    <td>{item.stock}</td>
                    <td>{item.brand}</td>
                    <td>{item.weight}</td>
                    <td>
                      <Link className={styles.accionesCrud} to={item.id}><FaEye /></Link>
                      <Link className={styles.accionesCrud} to={editarProducto}><FaEdit /></Link>
                      <Link className={styles.accionesCrud} to={eliminarProducto}><FaTrash /></Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>

        {/* paginación dummy */}
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>

      </div>
    </div>
  )
}

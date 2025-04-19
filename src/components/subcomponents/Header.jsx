/* eslint-disable no-unused-vars */
import { useContext } from 'react'

import { Link } from 'react-router-dom'

import { CtxShoppingCart } from "../Layout"
import ShoppingCart from '../ShoppingCart'

export default function Header() {
  const checkout = () => {
    alert('Proceeding to checkout...')
  }
  const clear = () => {
    alert('Clearing cart...')
  }

  const { item, setItem } = useContext(CtxShoppingCart)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">My Online Store</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/products">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/customers">Clientes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/gallery">Galería</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Operaciones
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>

            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
              </form>
              <button className="btn btn-primary ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample1" aria-controls="offcanvasExample">
                Shopping Cart
              </button>
            </ul>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample1" aria-labelledby="offcanvasExampleLabel" style={{width: '700px'}}>
        <ShoppingCart item={item} setItem={setItem} checkout={checkout} clear={clear} />
      </div>

    </>
  )
}

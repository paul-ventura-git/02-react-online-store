/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react';

import { useLoaderData, Link } from 'react-router-dom';

import MyModal from './MyModal'
import classes from '../assets/css/ProductDetails.module.css'

import { CtxShoppingCart } from './Layout';
import InputGroup from './higherLevel/InputGroup';

import md5 from 'blueimp-md5';
import ShoppingCart from './ShoppingCart';

export default function GalleryDetails() {
  const { item, setItem} = useContext(CtxShoppingCart);
  const product = useLoaderData();

  const [inputValue, setInputValue] = useState(1); //Quantity

  const handleValueChange = (newValue) => {
      setInputValue(newValue);
      console.log(newValue)
  };

  const addElement = (newElement) => {
    newElement.key = md5(newElement.description+Date.now());
    newElement.quantity = inputValue;
    newElement.total = newElement.price * inputValue;
    setItem(prevArray => [...prevArray, newElement]);
    alert('Producto agregado al carrito de compras')    
    return(<ShoppingCart item={item} setItem={setItem} />)
  };

  //item[0]? console.log("++++++++++++++++++++++++++++++++++++++"+JSON.stringify(item)) : console.log("No hay elementos en el carrito de compras")
  if (!product) {
    return (
      <MyModal>
        <main className={classes.details}>
          <h1>No se pudo encontrar el producto</h1>
          <p>Desafortunadamente, el producto requerido no fue encontrado.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </MyModal>
    );
  }
  return (  
    <MyModal myTitle="Detalles del Producto" size="lg">

      <div className="card mb-3 d-flex align-items-center mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={product.images[0]} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title">{product.title}</h3>
              <p className={classes.text}>Description: {product.description}</p>
              <p className={classes.text}>Category: {product.category}</p>
              <p className={classes.text}>Precio: {product.price}</p>
              <p className={classes.text}>Discount: {product.discount}</p>
              <p className={classes.text}>Rating: {product.rating}</p>
              <p className={classes.text}>Stock: {product.stock}</p>
              <p className={classes.text}>Marca: {product.brand}</p>
              <p className={classes.text}>Peso: {product.weight}</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex align-items-center mb-3">
        <label htmlFor="quantity" className="col-form-label mx-3">Cantidad:</label>
        <InputGroup value={inputValue} onValueChange={handleValueChange}></InputGroup>
      </div>

      <button type="button" className="btn btn-info mx-3 mb-3" onClick={()=>addElement(product)}>Agregar al carrito de compras</button>
    </MyModal>    
  );  
}

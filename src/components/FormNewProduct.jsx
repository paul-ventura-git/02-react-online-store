import { Link, Form as MainForm } from 'react-router-dom'

import Form from 'react-bootstrap/Form';
import MyModal from './MyModal'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FormNewProduct() {

  return (
    <MyModal myTitle="Nuevo Producto">
      <MainForm method="post">
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label column sm={3}>Nombre del Producto:</Form.Label>
          <Col sm={9}>
            <Form.Control name="title" placeholder="" />
          </Col>          
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label column sm={3}>Descripción del producto:</Form.Label>
          <Col sm={9}>
            <Form.Control as="textarea" name="description" rows={3} />
          </Col>          
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label column sm={3}>Categoría:</Form.Label>
          <Col sm={9}>
            <Form.Control name="category" placeholder="" />
          </Col>          
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label column sm={3}>Precio:</Form.Label>
          <Col sm={9}>
            <Form.Control name="price" placeholder="" />
          </Col>          
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label column sm={3}>Descuento:</Form.Label>
          <Col sm={9}>
            <Form.Control name="discount" placeholder="" />
          </Col>          
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label column sm={3}>Rating:</Form.Label>
          <Col sm={9}>
            <Form.Control name="rating" placeholder="" />
          </Col>          
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label column sm={3}>Stock:</Form.Label>
          <Col sm={9}>
            <Form.Control name="stock" placeholder="" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label column sm={3}>Marca:</Form.Label>
          <Col sm={9}>
            <Form.Control name="brand" placeholder="" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label column sm={3}>Peso:</Form.Label>
          <Col sm={9}>
            <Form.Control name="weight" placeholder="" />
          </Col>
        </Form.Group>
        <br />
        <div style={{  display: "flex", justifyContent: "flex-end",  gap: "1rem"}}>
          <button className="btn btn-light">
            <Link className="nav-link" to='..'>
              Cancelar
            </Link>
          </button>
          <button className="btn btn-primary">Enviar</button>
        </div>
        <br />
      </MainForm>
    </MyModal>
  )
}

import { Link, Form as MainForm } from 'react-router-dom'

import Form from 'react-bootstrap/Form';
import MyModal from './MyModal'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FormNewCustomer() {
  return (
    <MyModal myTitle="Nuevo Cliente">
      <MainForm method="post">
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label column sm={3}>Nombre:</Form.Label>
          <Col sm={9}>
            <Form.Control name="name" placeholder="" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label column sm={3}>Teléfono:</Form.Label>
          <Col sm={9}>
            <Form.Control name="phone" placeholder="" />
          </Col>          
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label column sm={3}>Email:</Form.Label>
          <Col sm={9}>
            <Form.Control name="email" placeholder="" />
          </Col>          
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label column sm={3}>Dirección:</Form.Label>
          <Col sm={9}>
            <Form.Control name="address" placeholder="" />
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

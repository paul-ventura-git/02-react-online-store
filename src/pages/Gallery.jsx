import { Outlet, Link, useLoaderData } from "react-router-dom";
import ProductFilter from "../components/ProductFilter";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Gallery() {
  const gallery = useLoaderData();

  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Galería de productos</h1>
            <p className="lead text-body-secondary">
              Explora nuestra amplia gama de productos. Usa el filtro de categorías para encontrar fácilmente lo que buscas y disfruta de una experiencia de compra personalizada y eficiente. ¡Compra ahora!
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 mx-2">Main call to action</a>
              <a href="#" className="btn btn-secondary my-2 mx-2">Secondary action</a>
            </p>
          </div>
        </div>
      </section>

      <Outlet></Outlet>

      <div className="container">
        <Row>
          <Col sm={4} md={4} lg={4}>
            <ProductFilter></ProductFilter>
          </Col>
          <Col sm={8} md={8} lg={8}>
            <div className="album py-5 bg-body-tertiary">
              <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> {/* INICIO del Grid de la cuadrícula */}
                  {
                    gallery.map((item) => {
                      let thisProduct = '' + item.id;
                      return(
                        <div className="col" key={item.id}>
                          <div className="card shadow-sm">
                            <img 
                              className="bd-placeholder-img card-img-top" 
                              width="100%" 
                              height="350"
                              src={item.thumbnail} 
                            >
                            </img>
                            <div className="card-body">
                              <h5 className="card-title">{item.title}</h5>
                              <p className="card-text">{item.description}</p>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                  <Link to={thisProduct}><button type="button" className="btn btn-sm btn-outline-secondary">View</button></Link>
                                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small className="text-body-secondary">9 mins</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }

                </div> {/* FIN del Grid de la cuadrícula */}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      



    </main>
  )
}

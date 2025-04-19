import { Outlet, Link, useLoaderData } from "react-router-dom";

export default function Gallery() {
  const gallery = useLoaderData();

  return (
    <main>
      <Outlet></Outlet>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Galería de productos</h1>
            <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p>
              <a href="#" className="btn btn-primary my-2 mx-2">Main call to action</a>
              <a href="#" className="btn btn-secondary my-2 mx-2">Secondary action</a>
            </p>
          </div>
        </div>
      </section>

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

    </main>
  )
}

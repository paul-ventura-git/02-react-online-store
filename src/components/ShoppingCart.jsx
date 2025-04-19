/* eslint-disable no-unused-vars */
export default function ShoppingCart({ item, setItem, checkout, clear}) {
  return (
    <>
      
      <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Shopping Cart</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Items: <strong>{item.length}</strong>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Sub total</th>
              </tr>
            </thead>
            <tbody>
              {
                (item.length > 0) && 
                  item.map((product) => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>{product.total}</td>
                    </tr>
                  ))                
              }
              
            </tbody>
          </table>
          <div className='d-flex justify-content-between'>
            Total (US$) : <strong>0.00</strong>
          </div>
          <div className='d-flex justify-content-between'>
            <button onClick={checkout} className='btn btn-primary mt-3'>Proceed to Checkout</button>
            <button onClick={clear} className='btn btn-danger mt-3'>Clear</button>
          </div>
        </div>

    </>
  )
}

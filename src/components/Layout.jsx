import { useState, createContext } from "react";

import { Outlet } from "react-router-dom";
import Header from "./subcomponents/Header";
import Footer from "./subcomponents/Footer";

const CtxShoppingCart = createContext([])

export default function Layout() {
  const [item, setItem] = useState([])
  const [qty, setQty] = useState(0)

  return (
    <CtxShoppingCart.Provider value={{item, setItem, qty, setQty}}> {/** wrapper */}
      <Header /> {/* OFF CANVAS, SHOPPING CART*/}
        <Outlet /> {/* PAGE: GALLERY -> GALLERY-DETAILS */}
      <Footer />
    </CtxShoppingCart.Provider>
  )
}

export { CtxShoppingCart };
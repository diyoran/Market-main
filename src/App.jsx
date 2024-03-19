import { Fragment } from "react";
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Product from "./pages/Product"
import Bag from "./pages/Bag";

const App = () => {
  return (
    <Fragment>
      <main className="main">
        <Routes>
          <Route path="/Market-main" index element={<Home />} />
          <Route path="/Market-main/product/:id" element={<Product />} />
          <Route path="*" element={<h2 className="title-2">404</h2>} />
          <Route path="/Market-main/bag" element={<Bag />} />
        </Routes>
      </main>
    </Fragment>
  )
}

export default App;

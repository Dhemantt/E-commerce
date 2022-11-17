import "./index.css";
import Nav from "./Components/Header/Nav";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/Products/ProductDetails";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import { CartContextProvider } from "./Store/CartContextProvider";
import { Routes, Route } from "react-router-dom";
import Contactus from "./Components/ContactUs/Contactus";
import Login from "./Components/Login/Login";


function App() {
 
  return (
    <div className="app">
      <CartContextProvider>
        <Nav />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/products/" element={<Products />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/products/:pId" element={<ProductDetails />} />
            {<Route path="/login" element={<Login />} />}
          </Routes>
        </main>
      </CartContextProvider>

      <Footer />
    </div>
  );
}

export default App;

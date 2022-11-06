import "./index.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import productData from "./productData";
import { ShowCartContextProvider } from "./Store/ShowCartContext";
import { CartContextProvider } from "./Store/CartContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <ShowCartContextProvider>
          <Cart />
          <Header />
          <Banner />
        </ShowCartContextProvider>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/about"
            element={<Products productsList={productData} />}
          />
        </Routes>
      </CartContextProvider>

      <Footer />
    </div>
  );
}

export default App;

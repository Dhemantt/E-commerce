import "./index.css";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import productData from "./productData";
import {ShowCartContextProvider} from "./Store/ShowCartContext";
function App() {
  return (
    <div className="App">
      <ShowCartContextProvider>
        <Cart />
        <Header />
      </ShowCartContextProvider>
      <main>
        <Products productsList={productData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

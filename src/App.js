import "./index.css";
import Header from "./Components/Header";

import Products from "./Components/Products";
import Footer from "./Components/Footer";
import productData from "./productData";
function App() {
  return (
    <div className="App">
      <Header />
      <Products productsList={productData} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

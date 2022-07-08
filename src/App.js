import './App.css';
import Nav from "./components/nav";
import ProductList from "./components/productList";
import Cart from "./components/cart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/checkout" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

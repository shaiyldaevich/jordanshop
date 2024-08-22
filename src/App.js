import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import AddProduct from "./components/AddProduct";
import BuyNow from "./components/BuyNow";
import AddBasket from "./components/AddBasket";
import Man from "./components/Man";
import Woman from "./components/woman";
import Kid from "./components/Kid";
import Sale from "./components/Sale";
import Details from "./components/detailsProduct";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/baynow" element={<BuyNow />} />
        <Route path="/addbasket" element={<AddBasket />} />
        <Route path="/man" element={<Man />} />
        <Route path="/kids" element={<Kid />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/detailsproduct" element={<Details />} />
        <Route path="/searchproduct/:proName" element={<Search />} />
      </Routes>
    </div>
  );
}
// console.log("a" > "b");
export default App;

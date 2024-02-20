import { Route, Routes } from "react-router-dom";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/productDetails/ProductDetails";
import Homepage from "./customer/pages/Homepage/Homepage";
import CustomerRoute from "./Routers/CustomerRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRoute />} />
      </Routes>
    </div>
  );
}

export default App;

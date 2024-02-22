import { Route, Routes } from "react-router-dom";
import Homepage from "../customer/pages/Homepage/Homepage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/productDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import PaymentSuccess from "../customer/components/payment/PaymentSuccess";

const CustomerRoute = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<Homepage />} />
        <Route path="/register" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        <Route path="/payment/:orderId" element={<PaymentSuccess />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoute;

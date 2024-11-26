import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import AddAddressPage from "./pages/AddAddressPage";
import PaymentPage from "./pages/PaymentPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import ProfilePage from "./pages/ProfilePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}>
          <Route index element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
        <Route path='home' element={<HomePage/>}/>
        <Route path='productPage' element={<ProductPage/>}/>
        <Route path='checkout' element={<CheckoutPage/>}/>
        <Route path='addAddressPage' element={<AddAddressPage/>}/>
        <Route path='paymentPage' element={<PaymentPage/>}/>
        <Route path='orderSuccessPage' element={<OrderSuccessPage/>}/>
        <Route path='profilePage' element={<ProfilePage/>}/>
        
      </Routes>

      {/* <HomePage/> */}
    </BrowserRouter>
  );
}

export default App;

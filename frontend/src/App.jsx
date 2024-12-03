import { useEffect, useState } from "react";
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
import { getCartItems } from "./services/cartItemsService";
import { getAddresses } from "./services/addressService.js";
import { getPaymentCards } from "./services/paymentCardService.js";
import ScrollToTop from "./components/scrollToTop.jsx";
import Cart from "./components/Cart.jsx";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartChanged, setIsCartChanged] = useState(false);
  const [amount, setAmount] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const [isAddressChanged, setIsAddressChanged] = useState(false);
  const [paymentCards, setPaymentCards] = useState();
  const [isPaymentCardsChanged, setIsPaymentCardsChanged] = useState(false);
  const [productClicked, setProductClicked] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getCartItems()
      .then((res) => setCartItems(res))
      .catch((err) => console.log("error in getting cart items", err))
      .finally(() => setIsCartChanged(false));
  }, [isCartChanged]);

  useEffect(() => {
    const totalAmount = cartItems.reduce(
      (acc, item) => acc + item.itemCount * item.cost,
      0
    );
    setAmount(totalAmount);
  }, [cartItems]);

  useEffect(() => {
    getAddresses()
      .then((res) => setAddresses(res.data))
      .catch((err) => console.log("error in getting addresses", err))
      .finally(() => setIsAddressChanged(false));
  }, [isAddressChanged]);

  useEffect(() => {
    getPaymentCards()
      .then((res) => setPaymentCards(res))
      .catch((err) => console.log("error in getting paymentCards", err))
      .finally(() => setIsPaymentCardsChanged(false));
  }, [isPaymentCardsChanged]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WelcomePage />}>
          <Route index element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
        <Route
          path="home"
          element={<HomePage setProductClicked={setProductClicked} />}
        />
        <Route
          path="productPage"
          element={
            <ProductPage
              cartItems={cartItems}
              setCartItems={setCartItems}
              isCartChanged={isCartChanged}
              setIsCartChanged={setIsCartChanged}
              amount={amount}
              productClicked={productClicked}
            />
          }
        />
        <Route
          path="checkout"
          element={<CheckoutPage orderedItems={cartItems} amount={amount} />}
        />
        <Route
          path="addAddressPage"
          element={
            <AddAddressPage
              addresses={addresses}
              setIsAddressChanged={setIsAddressChanged}
            />
          }
        />
        <Route path="paymentPage" element={<PaymentPage />} />
        <Route path="orderSuccessPage" element={<OrderSuccessPage />} />
        <Route
          path="profilePage"
          element={
            <ProfilePage
              paymentCards={paymentCards}
              setIsPaymentCardsChanged={setIsPaymentCardsChanged}
            />
          }
        />
        <Route path="cartDetails" element={<Cart/>} />
      </Routes>

      {/* <HomePage/> */}
    </BrowserRouter>
  );
}

export default App;

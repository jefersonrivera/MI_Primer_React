import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import CartProvider from "./context/CartContext";
import UserProvider from "./context/UserContext";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import PublicRoutes from "./pages/PublicRoutes";

const App = () => {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/Register"
              element={
                <PublicRoutes>
                  <Register />
                </PublicRoutes>
              }
            ></Route>
            <Route
              path="/Login"
              element={
                <PublicRoutes>
                  <Login />
                </PublicRoutes>
              }
            ></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoutes>
                  <Profile />
                </ProtectedRoutes>
              }
            ></Route>
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </UserProvider>
    </>
  );
};

export default App;

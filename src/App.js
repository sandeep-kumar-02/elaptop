import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductInfo from "./pages/ProductInfo";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoutes> <HomePage /> </ProtectedRoutes>} />
        <Route path="/cart" element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
        <Route path="/productInfo/:productId" element={<ProtectedRoutes><ProductInfo /></ProtectedRoutes>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export const ProtectedRoutes = ({children}) =>{
  if(localStorage.getItem('currentUser')){
    return children;
  }else{
    return <Navigate to='/login' />
  }
}


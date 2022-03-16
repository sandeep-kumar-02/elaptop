import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../stylesheets/header.css';
import { BsCart3 } from "react-icons/bs";

function Header() {
  const {cartItems} = useSelector(state=>state.cartReducer);
  const {user} = JSON.parse(localStorage.getItem('currentUser'));

  function logout(){
    localStorage.removeItem('currentUser');
    window.location.reload();
  }
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <Link to='/'>e-Laptop</Link>
          
        </div>
        <div className="nav-links">
          <Link to='/'>{user.email.substring(0,user.email.length-10)}</Link>
          <Link to='/' onClick={logout}>Logout</Link>
          <Link to='/cart'><BsCart3 className="cart-icon"/> {cartItems.length}</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
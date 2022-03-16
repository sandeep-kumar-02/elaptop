import Layout from "../components/Layout"
import {useSelector,useDispatch} from 'react-redux';
import { FaTrashAlt } from "react-icons/fa";
import '../stylesheets/cartPage.css';
import { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import {Link} from 'react-router-dom';



function CartPage() {
  const {cartItems} = useSelector(state=>state.cartReducer);
  const [totalAmount,setTotalAmount] = useState(0);
  const dispatch = useDispatch();



  function removeCartItem(item) {
    dispatch({
      type: 'REMOVEFROMCART',
      payload: item
    })
  }

  useEffect(()=>{
    let temp = 0;
    cartItems.forEach(cartItem=>{
      temp = temp+cartItem.price;
    });
    setTotalAmount(temp);
  },[cartItems])

  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
  },[cartItems]);
  return (
    <Layout>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            cartItems.map(item=>{
              return <tr key={item.id}>
                <td><img src={item.imageURL} height="80px" width="80px"/></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td className="delete-cart-item">{<FaTrashAlt onClick={()=> removeCartItem(item)}/>}</td>
              </tr>
            })
          }
        </tbody>
      </table>  
      <div className="total-amount">
      Total Amount : {totalAmount} <FaRupeeSign />
      </div>
      <div className="place-order">
        <Link to='/'><button>Continue Shopping</button></Link>
          
      </div>
          

    </Layout>
  )
}

export default CartPage